import { Singleton } from '@shares/utils/singleton';
import { Player } from '@src/model/player';

export class PlayerManager extends Singleton<PlayerManager>() {
  players = new Map<string, Player>();

  addPlayer(entity: GamePlayerEntity) {
    const player = new Player(entity);
    this.players.set(entity.player.userId, player);
    return player;
  }

  removePlayer(id: string): void {
    this.players.delete(id);
  }

  getPlayer(id: string): Player | undefined {
    return this.players.get(id);
  }
}
