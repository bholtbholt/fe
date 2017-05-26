export type UserId = number;
export interface User {
  id: UserId;
  name: string;
  clientId: ClientId[];
}

export type PageId = number;
export interface Page {
  id: PageId;
  title: string;
  clientId: ClientId;
}

export type ClientId = number;
export interface Client {
  id: ClientId;
  name: string;
  userId: UserId[];
}
