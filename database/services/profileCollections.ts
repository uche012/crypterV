import { db } from "database";
import { profileCollections } from "database/schema";
import { ProfileCollections } from "database/type";

export const GetProfileCollections = async (): Promise<
  ProfileCollections[]
> => {
  const data = await db.select().from(profileCollections);
  return data;
};
