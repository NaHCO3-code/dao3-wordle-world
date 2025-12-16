import { ClientEvent } from '@shares/clientEvent';
import { KEY_CODE, KEY_NAME } from '@shares/constants/key';
import { DataChannel } from '@src/manager/datachannel';
import { Game } from '@src/manager/game';
import type { Wordle } from './wordle';

export class Player {
  public entity: GamePlayerEntity;
  public game: Wordle | undefined;

  constructor(entity: GamePlayerEntity) {
    this.entity = entity;
    // DataChannel.instance.listenPlayer(
    //   this.entity.player.userId,
    //   ServerEvent.hello,
    //   ({ msg }) => {
    //     console.log(`(server) Hello ${msg}`);
    //     DataChannel.instance.emitRemote(
    //       this.entity.player.userId,
    //       ClientEvent.ack,
    //       { msg: `ACK from wordle world` }
    //     );
    //   }
    // );
    this.entity.player.onKeyDown(({ keyCode }) => {
      this.onKeyDown(keyCode);
    });
    this.game = Game.instance.getGame(Game.instance.createGame());
  }

  onKeyDown(keyCode: number) {
    if (!this.game) {
      return;
    }
    if (keyCode >= 65 && keyCode <= 90) {
      this.game.currentInput += KEY_NAME[keyCode as keyof typeof KEY_NAME];
      this.game.currentInput = this.game.currentInput.slice(-5);
      DataChannel.instance.emitRemote(
        this.entity.player.userId,
        ClientEvent.inputLetter,
        { currentInput: this.game.currentInput }
      );
    } else if (keyCode === KEY_CODE.ENTER || keyCode === KEY_CODE.NUM_ENTER) {
      const checkResult = this.game.check(this.game.currentInput.toLowerCase());
      if (Array.isArray(checkResult)) {
        this.game.currentInput = '';
        DataChannel.instance.emitRemote(
          this.entity.player.userId,
          ClientEvent.inputEnter,
          {
            history: this.game.history,
            historyStatus: this.game.historyStatus,
            charStatus: this.game.charStatus,
          }
        );
      } else {
      }
    } else if (keyCode === KEY_CODE.BACKSPACE) {
      this.game.currentInput = this.game.currentInput.slice(0, -1);
      DataChannel.instance.emitRemote(
        this.entity.player.userId,
        ClientEvent.inputLetter,
        {
          currentInput: this.game.currentInput,
        }
      );
    }
  }
}
