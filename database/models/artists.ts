import { pgTable, text, boolean, integer } from "drizzle-orm/pg-core";

export const artists = pgTable("artists", {
  id: integer("id").primaryKey(),
  login: text("login").notNull(),
  avatar: text("avatar").notNull(),
  price: text("price").notNull(),
  follow: boolean("follow").notNull(),
});
