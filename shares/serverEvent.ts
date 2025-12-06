export const ServerEvent = {
  hello: 'hello',
};
export type ServerEventType = {
  [ServerEvent.hello]: {
    msg: string;
  };
};
