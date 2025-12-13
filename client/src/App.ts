import { ClientEvent } from '@shares/clientEvent';
import { ServerEvent } from '@shares/serverEvent';
import { DataChannel } from './manager/datachannel';
import { Box, Text } from './xylem/basic';
import type { xignal } from './xylem/xignal';
import { type xRef, xref } from './xylem/xignal';
import { mount, xComponent } from './xylem/xylem';

(async function () {
  await sleep(1000);
  DataChannel.instance.emitRemote(ServerEvent.hello, { msg: 'player' });
  DataChannel.instance.listenEvent(ClientEvent.ack, ({ msg }) => {
    console.log(`(client) Ack received: ${msg}`);
  });
})();

function Word(props: {
  value: xRef<string>;
  position?: xignal<Coord2>;
  onPointerDown?: (event: UiEvent) => void;
}) {
  return xComponent(Text, {
    textContent: props.value,
    position: props.position,
    onPointerDown: props.onPointerDown,
  });
}

function App() {
  const c1 = xref('hello');
  const c2 = xref('world');
  return xComponent(
    Box,
    {
      backgroundOpacity: xref(0),
    },
    [
      xComponent(Word, {
        value: c1,
      }),
      xComponent(Word, {
        value: c2,
        position: Coord2.create({
          offset: Vec2.create({ x: 100, y: 0 }),
          scale: Vec2.create({ x: 0, y: 0 }),
        }),
        onPointerDown() {
          c2.value += '!';
        },
      }),
    ]
  );
}

mount(App, UiScreen.create());
