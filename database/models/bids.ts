import { pgTable, text, boolean, integer } from "drizzle-orm/pg-core";

export const statistics = pgTable("statistics", {
  id: integer("id").primaryKey(),
  label: text("label").notNull(),
  avatar: text("avatar"),
  history: boolean("history"),
  title: text("title").notNull(),
  login: text("login"),
  image: text("image"),
  category: text("category"),
});

export const links = pgTable("links", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  icon: text("icon").notNull(),
  url: text("url").notNull(),
});

export const provenance = pgTable("provenance", {
  id: integer("id").primaryKey(),
  avatar: text("avatar").notNull(),
  history: boolean("history").notNull(),
  content: text("content").notNull(),
  contentby: text("contentby").notNull(),
  date: text("date").notNull(),
  url: text("url").notNull(),
  price: text("price"),
});

export const bids = pgTable("bids", {
  id: integer("id").primaryKey(),
  bid: text("bid").notNull(),
  price: text("price").notNull(),
  time: integer("time").notNull(),
  image: text("image").notNull(),
  title: text("title").notNull(),
  date: text("date").notNull(),
  content: text("content").notNull(),
});
