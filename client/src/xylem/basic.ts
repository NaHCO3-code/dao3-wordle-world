import type { xignal } from './xignal';
import { type xRef, xwatch } from './xignal';
import type { Xylem } from './xylem';
import { createXylem } from './xylem';

function __helper_basicUiPropsBinder(
  node: UiRenderable,
  props: {
    [key in keyof (UiNode & UiRenderable & UiText)]?: xRef<
      (UiNode & UiRenderable & UiText)[key]
    >;
  }
) {
  for (const key in props) {
    // @ts-expect-error
    if (props[key] === undefined) {
      continue;
    }
    xwatch(
      // @ts-expect-error
      () => props[key].value,
      (value) => {
        // @ts-expect-error
        node[key] = value;
      }
    );
  }
}

function __helper_complexUiPropsBinder(
  node: UiRenderable,
  props: {
    [key in keyof (UiNode & UiRenderable & UiText)]?: xignal<
      (UiNode & UiRenderable & UiText)[key]
    >;
  }
) {
  for (const key in props) {
    // @ts-expect-error
    if (props[key] === undefined) {
      continue;
    }
    xwatch(
      // @ts-expect-error
      () => props[key],
      (value) => {
        // @ts-expect-error
        node[key].copy(value);
      }
    );
  }
}

export function Text(props: {
  uiScale?: xignal<UiScale>;
  anchor?: xignal<Vec2>;
  position?: xignal<Coord2>;
  size?: xignal<Coord2>;
  backgroundColor?: xignal<Vec3>;
  textColor?: xignal<Vec3>;

  backgroundOpacity?: xRef<number>;
  rotation?: xRef<number>;
  textFontSize?: xRef<number>;

  onPointerDown?: (ev: UiEvent) => void;

  textContent: xRef<string>;
}): Xylem {
  const node = UiText.create();

  __helper_basicUiPropsBinder(node, {
    backgroundOpacity: props.backgroundOpacity,
    rotation: props.rotation,
    textFontSize: props.textFontSize,
  });

  __helper_complexUiPropsBinder(node, {
    uiScale: props.uiScale,
    anchor: props.anchor,
    position: props.position,
    size: props.size,
    backgroundColor: props.backgroundColor,
    textColor: props.textColor,
  });

  xwatch(
    () => props.textContent.value,
    (value) => {
      node.textContent = value;
    }
  );

  if (props.onPointerDown) {
    node.events.add('pointerdown', props.onPointerDown);
  }

  return createXylem({
    setup() {
      return node;
    },
    destroy() { },
    type: Text,
  });
}

export function Box(props: {
  uiScale?: xignal<UiScale>;
  anchor?: xignal<Vec2>;
  position?: xignal<Coord2>;
  size?: xignal<Coord2>;
  backgroundColor?: xignal<Vec3>;

  backgroundOpacity?: xRef<number>;
  rotation?: xRef<number>;
}): Xylem {
  const node = UiBox.create();
  __helper_basicUiPropsBinder(node, {
    backgroundOpacity: props.backgroundOpacity,
    rotation: props.rotation,
  });

  __helper_complexUiPropsBinder(node, {
    uiScale: props.uiScale,
    anchor: props.anchor,
    position: props.position,
    size: props.size,
    backgroundColor: props.backgroundColor,
  });

  return createXylem({
    setup() {
      return node;
    },
    destroy() { },
    type: Box,
  });
}
