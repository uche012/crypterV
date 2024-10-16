import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const help = pgTable("help", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
  color: text("color").notNull(),
  url: text("url").notNull(),
});
