import { pgTable, text, jsonb, integer } from "drizzle-orm/pg-core";

export const activityCollections = pgTable("activity-collections", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  login: text("login").notNull(),
  price: text("price").notNull(),
  avatar: text("avatar").notNull(),
  images: jsonb("images").notNull(),
  color: text("color").notNull(),
  url: text("url").notNull(),
});
