import { type CHAR_STATUS } from '@shares/utils/constants';
import { statusColor } from '../utils/color';
import { Text } from '../xylem/basic';
import { xComponent } from '../xylem/xylem';
import {
  type xRef,
  type xignal,
  xreactive,
  xwatch,
  xref,
} from '../xylem/xignal';

export function Char(props: {
  char: xRef<string>;
  status: xRef<CHAR_STATUS>;
  id: xRef<number>;
  position: xignal<Coord2>;
  size: xignal<Coord2>;
}) {
  const bgColor = xreactive(Vec3.create());
  xwatch(
    () => statusColor(props.status.value),
    (v) => {
      bgColor.r = v.r;
      bgColor.g = v.g;
      bgColor.b = v.b;
    }
  );
  return (
    <Text
      textContent={props.char}
      position={props.position}
      size={props.size}
      textFontSize={xref(30)}
      backgroundOpacity={xref(1)}
      backgroundColor={bgColor}
    ></Text>
  );
}
