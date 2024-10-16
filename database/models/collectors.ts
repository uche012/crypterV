import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const collectors = pgTable("owners", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  login: text("login").notNull(),
  sale: text("sale").notNull(),
  avatar: text("avatar").notNull(),
  url: text("url").notNull(),
});
