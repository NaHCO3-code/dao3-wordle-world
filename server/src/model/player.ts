import { ClientEvent } from '@shares/clientEvent';
import { ServerEvent } from '@shares/serverEvent';
import { DataChannel } from '@src/manager/datachannel';
import type { Wordle } from './wordle';

export class Player {
  public entity: GamePlayerEntity;
  public game: Wordle | undefined;

  constructor(entity: GamePlayerEntity) {
    this.entity = entity;
    DataChannel.instance.listenPlayer(
      this.entity.player.userId,
      ServerEvent.hello,
      ({ msg }) => {
        console.log(`(server) Hello ${msg}`);
        DataChannel.instance.emitRemote(
          this.entity.player.userId,
          ClientEvent.ack,
          { msg: `ACK from wordle world` }
        );
      }
    );
  }
}
