export const ClientEvent = {
  ack: 'ack',
};
export type ClientEventType = {
  [ClientEvent.ack]: {
    msg: string;
  };
};
