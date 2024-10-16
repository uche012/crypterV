import { db } from "database";
import { artists } from "database/schema";
import { Artists } from "database/type";

export const GetArtists = async (): Promise<Artists[]> => {
  const data = await db.select().from(artists);
  return data;
};
