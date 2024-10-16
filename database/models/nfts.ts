import { pgTable, text, integer, boolean } from "drizzle-orm/pg-core";

export const nfts = pgTable("nfts", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  imageCategory: text("imageCategory").notNull(),
  avatar: text("avatar").notNull(),
  login: text("login").notNull(),
  verified: boolean("verified").notNull(),
  bid: text("bid").notNull(),
  price: text("price").notNull(),
  url: text("url").notNull(),
});
