import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const activities = pgTable("activities", {
  id: integer("id").primaryKey(),
  nft: text("nft").notNull(),
  fromAvatar: text("fromAvatar").notNull(),
  fromLogin: text("fromLogin").notNull(),
  toAvatar: text("toAvatar").notNull(),
  toLogin: text("toLogin").notNull(),
  price: text("price").notNull(),
});
