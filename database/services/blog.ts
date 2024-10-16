import { db } from "database";
import { blog } from "database/schema";
import { Blog } from "database/type";

export const GetBlog = async (): Promise<Blog[]> => {
  const data = await db.select().from(blog);
  return data;
};
