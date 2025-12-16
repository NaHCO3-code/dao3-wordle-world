/* eslint-disable @typescript-eslint/no-explicit-any */
import type { xignal } from './xignal';

export interface Xylem {
  setup: () => UiNode;
  destroy: () => void;
  type: xFunctionComponent<any>;
  child: Xylem | null;
  sibling: Xylem | null;
  return: Xylem | null;
  uiNode: UiNode | null;
}

export function createXylem(
  config: Partial<Xylem> &
    Required<{
      setup: () => UiNode;
      destroy: () => void;
      type: xFunctionComponent<any>;
    }>
): Xylem {
  return {
    child: null,
    sibling: null,
    return: null,
    uiNode: null,
    ...config,
  };
}

export type xProps = Record<string, xignal<any>>;

export type xFunctionComponent<T extends xProps> = (
  props: T,
  ...args: Xylem[]
) => Xylem;

export function xComponent<T extends xProps>(
  fn: xFunctionComponent<T>,
  props: T,
  ...children: Xylem[]
): Xylem {
  const self = fn(props, ...children);
  if (!children || children.length === 0) {
    return self;
  }
  self.child = children[0];
  if (children.length > 1) {
    children.reduce((prev, curr) => {
      prev.sibling = curr;
      curr.return = self;
      return curr;
    }, self.child);
  }
  return self;
}

export function xSetup(root: Xylem) {
  const rootNode = root.setup();
  root.uiNode = rootNode;
  let current = root.child;
  while (current) {
    const childNode = xSetup(current);
    current.uiNode = childNode;
    childNode.parent = rootNode;
    current = current.sibling;
  }
  return rootNode;
}

export function xDestroy(root: Xylem) {
  let current = root.child;
  while (current) {
    current.destroy();
    if (current.uiNode !== current.return?.uiNode) {
      current.uiNode!.parent = undefined;
    }
    current.uiNode = null;
    xDestroy(current);
    current = current.sibling;
  }
  root.child = null;
}

export function xMount(component: xFunctionComponent<any>, root: UiScreen) {
  const appXylem = xComponent(component, {});
  const appNode = xSetup(appXylem);
  appNode.parent = root;
  return appNode;
}
