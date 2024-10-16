import { pgTable, text, jsonb, integer, real } from "drizzle-orm/pg-core";

export const profileCollections = pgTable("profile-collections", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  balance: real("balance").notNull(),
  floor: text("floor").notNull(),
  category: text("category").notNull(),
  categoryImage: text("categoryImage").notNull(),
  users: jsonb("users").notNull(),
  url: text("url").notNull(),
});
