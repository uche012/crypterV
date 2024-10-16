import { db } from "database";
import { artistsWeek } from "database/schema";
import { ArtistsWeek } from "database/type";

export const GetArtistsWeek = async (): Promise<ArtistsWeek[]> => {
  const data = await db.select().from(artistsWeek);
  return data;
};
