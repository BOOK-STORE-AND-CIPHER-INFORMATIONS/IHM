// src/schemas/Log.ts
export type Log = {
  "@id": string;
  "@type": string;
  id: string;
  account?: string;
  createdAt: string;
  type: string;
  data: any;
};
