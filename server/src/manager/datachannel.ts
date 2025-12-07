import type { ClientEvent, ClientEventType } from '@shares/clientEvent';
import type { ServerEvent, ServerEventType } from '@shares/serverEvent';
import { Singleton } from '@shares/utils/singleton';
import { genUUID4 } from '@shares/utils/UUID';
import { PlayerManager } from './player';

export class DataChannel<
  RemoteEvents extends Record<string, string>,
  SelfEvents extends Record<string, string>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RemoteEventType extends Record<RemoteEvents[keyof RemoteEvents], any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SelfEventType extends Record<SelfEvents[keyof SelfEvents], any>,
> extends Singleton<
  DataChannel<
    typeof ServerEvent,
    typeof ClientEvent,
    ServerEventType,
    ClientEventType
  >
>() {
  listeners: Map<
    string,
    Map<
      string,
      Map<string, (event: RemoteEventType[keyof RemoteEventType]) => void>
    >
  > = new Map();

  constructor() {
    super();
    remoteChannel.onServerEvent((event) => {
      this.emit(event.entity.player.userId, event.args.type, event.args.data);
    });
  }

  listenPlayer<Event extends keyof RemoteEventType>(
    playerId: string,
    event: Event,
    callback: (event: RemoteEventType[Event]) => void
  ) {
    const eventListeners = this.listeners.get(event as string) ?? new Map();
    const playerListeners = eventListeners.get(playerId) ?? new Map();
    const listenerId = genUUID4();
    playerListeners.set(listenerId, callback);
    eventListeners.set(playerId, playerListeners);
    this.listeners.set(event as string, eventListeners);
    return {
      removeListener: () => {
        playerListeners.delete(listenerId);
        if (playerListeners.size === 0) {
          eventListeners.delete(playerId);
        }
      },
    };
  }

  listenEvent<Event extends keyof RemoteEventType>(
    event: Event,
    callback: (event: RemoteEventType[Event]) => void
  ) {
    return this.listenPlayer('', event, callback);
  }

  private emit<Event extends keyof RemoteEventType>(
    playerId: string,
    event: Event,
    data: RemoteEventType[Event]
  ) {
    const eventListeners = this.listeners.get(event as string);
    if (!eventListeners) {
      return;
    }
    eventListeners.forEach((playerListeners, key) => {
      if (key !== playerId && key !== '') {
        return;
      }
      playerListeners.forEach((callback) => {
        callback(data);
      });
    });
  }

  emitRemote<Events extends keyof SelfEventType>(
    playerId: string | string[],
    event: Events,
    data: SelfEventType[Events]
  ) {
    const players = Array.isArray(playerId) ? playerId : [playerId];
    players.forEach((id) => {
      const player = PlayerManager.instance.getPlayer(id);
      if (!player) {
        return;
      }
      remoteChannel.sendClientEvent(player.entity, {
        type: event,
        data,
      });
    });
  }
}
