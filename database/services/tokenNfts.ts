import { db } from "database";
import { tokenNfts } from "database/schema";
import { TokenNfts } from "database/type";

export const GetTokenNfts = async (): Promise<TokenNfts[]> => {
  const data = await db.select().from(tokenNfts);
  return data;
};
