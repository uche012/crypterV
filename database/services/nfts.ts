import { db } from "database";
import { nfts } from "database/schema";
import { Nfts } from "database/type";

export const GetNfts = async (): Promise<Nfts[]> => {
  const data = await db.select().from(nfts);
  return data;
};
