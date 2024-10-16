import { db } from "database";
import { bids, statistics, links, provenance } from "database/schema";
import { Bids, Statistics, Links, Provenance } from "database/type";

export const GetBids = async (): Promise<Bids[]> => {
  const data = await db.select().from(bids);
  return data;
};

export const GetStatistics = async (): Promise<Statistics[]> => {
  const data = await db.select().from(statistics);
  return data;
};

export const GetLinks = async (): Promise<Links[]> => {
  const data = await db.select().from(links);
  return data;
};

export const GetProvenance = async (): Promise<Provenance[]> => {
  const data = await db.select().from(provenance);
  return data;
};
