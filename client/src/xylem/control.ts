import { watch } from '@dao3fun/mine-motion';
import type { xRef } from './xignal';
import { createXylem, type Xylem } from './xylem';
export function If(
  props: { condition: xRef<boolean> },
  ...children: Xylem[]
): Xylem {
  throw new Error('NOT IMPLEMENTED YET');
  if (children.length !== 1) {
    throw new Error('Condition must have exactly one child');
  }
  // const child = children[0];
  const self = createXylem({
    setup() {
      watch(
        () => props.condition.value,
        (show) => {
          if (show) {
          } else {
          }
        }
      );
      return self.return!.uiNode!;
    },
    destroy() { },
    type: If,
  });
  return self;
}
