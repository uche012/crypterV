import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const hotArtists = pgTable("hot-artists", {
  // id: uuid("id").primaryKey().defaultRandom(),
  id: integer("id").primaryKey(),
  login: text("login").notNull(),
  total: text("total").notNull(),
  avatar: text("avatar").notNull(),
  url: text("url").notNull(),
});
