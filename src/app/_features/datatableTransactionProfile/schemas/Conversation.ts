import { Message } from './Message';

export type Conversation = {
  id: string;
  date: string;
  transactionType: string;
  sentData: string;
  messages: Message[];
};
