import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const blogSlider = pgTable("blog-slider", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  content: text("content").notNull(),
  url: text("url").notNull(),
});
