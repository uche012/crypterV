import { pgTable, text, boolean, integer } from "drizzle-orm/pg-core";

export const followers = pgTable("followers", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  login: text("login").notNull(),
  avatar: text("avatar").notNull(),
  crypto: text("crypto").notNull(),
  follow: boolean("follow").notNull(),
  history: boolean("history").notNull(),
  url: text("url").notNull(),
});
