import { pgTable, text, boolean, integer } from "drizzle-orm/pg-core";

export const blog = pgTable("blog", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
  author: text("author").notNull(),
  date: text("date").notNull(),
  avatar: text("avatar").notNull(),
  history: boolean("history").notNull(),
  url: text("url").notNull(),
});
