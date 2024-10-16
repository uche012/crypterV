import { pgTable, text, jsonb, integer } from "drizzle-orm/pg-core";

export const helpDetail = pgTable("help-detail", {
  id: integer("id").primaryKey(),
  image: text("image").notNull(),
  content: jsonb("content").notNull(),
});
