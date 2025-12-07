import type { ClientEvent, ClientEventType } from '@shares/clientEvent';
import type { ServerEvent, ServerEventType } from '@shares/serverEvent';
import { Singleton } from '@shares/utils/singleton';
import { genUUID4 } from '@shares/utils/UUID';

export class DataChannel<
  RemoteEvents extends Record<string, string>,
  SelfEvents extends Record<string, string>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RemoteEventType extends Record<RemoteEvents[keyof RemoteEvents], any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SelfEventType extends Record<SelfEvents[keyof SelfEvents], any>,
> extends Singleton<
  DataChannel<
    typeof ClientEvent,
    typeof ServerEvent,
    ClientEventType,
    ServerEventType
  >
>() {
  listeners: Map<
    string,
    Map<string, (event: RemoteEventType[keyof RemoteEventType]) => void>
  > = new Map();

  constructor() {
    super();
    remoteChannel.onClientEvent((event) => {
      this.emit(event.type, event.data);
    });
  }

  listenEvent<Event extends keyof RemoteEventType>(
    event: Event,
    callback: (event: RemoteEventType[Event]) => void
  ) {
    const eventListeners = this.listeners.get(event as string) ?? new Map();
    const listenerId = genUUID4();
    eventListeners.set(listenerId, callback);
    this.listeners.set(event as string, eventListeners);
    return {
      removeListener: () => {
        eventListeners.delete(listenerId);
      },
    };
  }

  private emit<Event extends keyof RemoteEventType>(
    event: Event,
    data: RemoteEventType[Event]
  ) {
    const eventListeners = this.listeners.get(event as string);
    if (!eventListeners) {
      return;
    }
    eventListeners.forEach((callback) => {
      callback(data);
    });
  }

  emitRemote<Events extends keyof SelfEventType>(
    event: Events,
    data: SelfEventType[Events]
  ) {
    remoteChannel.sendServerEvent({
      type: event,
      data,
    });
  }
}
