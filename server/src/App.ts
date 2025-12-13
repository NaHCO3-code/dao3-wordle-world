import { Singleton } from '@shares/utils/singleton';
import { DataChannel } from './manager/datachannel';
import { PlayerManager } from './manager/player';

export default class App extends Singleton<App>() {
  playerManager = PlayerManager.instance;
  remoteManager = DataChannel.instance;

  init() {
    world.onPlayerJoin(({ entity }) => {
      this.onPlayerJoin(entity);
    });
    console.log('Server started');
  }

  onPlayerJoin(entity: GamePlayerEntity) {
    this.playerManager.addPlayer(entity);
  }
}

const app = App.instance;
app.init();
