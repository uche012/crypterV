import { db } from "database";
import { blogSlider } from "database/schema";
import { BlogSlider } from "database/type";

export const GetBlogSlider = async (): Promise<BlogSlider[]> => {
  const data = await db.select().from(blogSlider);
  return data;
};
