import { ClientEvent } from '@shares/clientEvent';
import { ServerEvent } from '@shares/serverEvent';
import { DataChannel } from './manager/datachannel';

(async function () {
  await sleep(1000);
  DataChannel.instance.emitRemote(ServerEvent.hello, { msg: 'player' });
  DataChannel.instance.listenEvent(ClientEvent.ack, ({ msg }) => {
    console.log(`(client) Ack received: ${msg}`);
  });
})();
