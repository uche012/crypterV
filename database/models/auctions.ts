import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const auctions = pgTable("auctions", {
  id: integer("id").primaryKey(),
  login: text("login").notNull(),
  crypto: text("crypto").notNull(),
  price: text("price").notNull(),
  image: text("image").notNull(),
  avatar: text("avatar").notNull(),
  timeHours: integer("timeHours").notNull(),
  url: text("url").notNull(),
});
