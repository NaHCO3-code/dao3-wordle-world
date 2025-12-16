/* client to server */

export const ServerEvent = {
  hello: 'hello',
} as const;
export type ServerEventType = {
  [ServerEvent.hello]: {
    msg: string;
  };
};
