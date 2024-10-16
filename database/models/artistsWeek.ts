import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const artistsWeek = pgTable("artists-week", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  avatar: text("avatar").notNull(),
  sale: text("sale").notNull(),
  crypto: text("crypto").notNull(),
  price: text("price").notNull(),
  url: text("url").notNull(),
});
