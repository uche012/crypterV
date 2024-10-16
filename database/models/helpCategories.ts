import { pgTable, text, jsonb, integer } from "drizzle-orm/pg-core";

export const helpCategories = pgTable("help-categories", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  links: jsonb("links").notNull(),
});
