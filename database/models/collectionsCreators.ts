import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const collectionsCreators = pgTable("collections-creators", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  login: text("login").notNull(),
  photo: text("photo").notNull(),
  image: text("image").notNull(),
  avatar: text("avatar").notNull(),
  url: text("url").notNull(),
});
