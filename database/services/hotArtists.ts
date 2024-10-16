import { db } from "database";
import { hotArtists } from "database/schema";
import { HotArtist } from "database/type";

export const GetHotArtists = async (): Promise<HotArtist[]> => {
  const data = await db.select().from(hotArtists);
  return data;
};
