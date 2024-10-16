import { pgTable, text, uuid, jsonb, integer } from "drizzle-orm/pg-core";

export const curatedCollections = pgTable("curated-collections", {
  //   id: uuid("id").primaryKey().defaultRandom(),
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  login: text("login").notNull(),
  price: text("price").notNull(),
  avatar: text("avatar").notNull(),
  images: jsonb("images").notNull(),
  color: text("color").notNull(),
  url: text("url").notNull(),
});
