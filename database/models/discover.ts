import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const discover = pgTable("discover", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  avatar: text("avatar").notNull(),
  login: text("login").notNull(),
  time: integer("time").notNull(),
});
