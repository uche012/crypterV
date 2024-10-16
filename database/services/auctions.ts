import { db } from "database";
import { auctions } from "database/schema";
import { AuctionsType } from "database/type";

export const GetAuctions = async (): Promise<AuctionsType[]> => {
  const data = await db.select().from(auctions);
  return data;
};
