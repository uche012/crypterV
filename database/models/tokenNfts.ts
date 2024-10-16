import { pgTable, text, jsonb, integer } from "drizzle-orm/pg-core";

export const tokenNfts = pgTable("token-nfts", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  price: text("price").notNull(),
  url: text("url").notNull(),
  users: jsonb("users").notNull(),
});
