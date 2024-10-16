import { pgTable, text, jsonb, integer } from "drizzle-orm/pg-core";

export const spotlight = pgTable("spotlight", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  price: text("price").notNull(),
  image: text("image").notNull(),
  url: text("url").notNull(),
  users: jsonb("users").notNull(),
});
