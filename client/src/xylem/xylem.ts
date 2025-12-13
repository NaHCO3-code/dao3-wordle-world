/* eslint-disable @typescript-eslint/no-explicit-any */
import type { xignal } from './xignal';

export interface Xylem {
  setup: () => UiNode;
  destroy: () => void;
  child: Xylem | null;
  sibling: Xylem | null;
  return: Xylem | null;
  uiNode: UiNode | null;
}

export function createXylem(config: Partial<Xylem>): Xylem {
  return {
    setup: () => {
      throw new Error('Not Implemented');
    },
    destroy: () => { },
    child: null,
    sibling: null,
    return: null,
    uiNode: null,
    ...config,
  };
}

export type xProps = Record<string, xignal<any>>;

export type xFunctionComponent<T extends xProps> = (props: T) => Xylem;

export function xComponent<T extends xProps>(
  fn: xFunctionComponent<T>,
  props: T,
  children: Xylem[] = []
): Xylem {
  const self = fn(props);
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

function render(root: Xylem) {
  const rootNode = root.setup();
  root.uiNode = rootNode;
  let current = root.child;
  while (current) {
    const childNode = render(current);
    current.uiNode = childNode;
    childNode.parent = rootNode;
    current = current.sibling;
  }
  return rootNode;
}

export function mount(component: xFunctionComponent<any>, root: UiScreen) {
  const appXylem = xComponent(component, {});
  const appNode = render(appXylem);
  appNode.parent = root;
  return appNode;
}
