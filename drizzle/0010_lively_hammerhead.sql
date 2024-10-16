CREATE TABLE IF NOT EXISTS "bids" (
	"id" integer PRIMARY KEY NOT NULL,
	"bid" text NOT NULL,
	"price" text NOT NULL,
	"time" integer NOT NULL,
	"image" text NOT NULL,
	"title" text NOT NULL,
	"date" text NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "links" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"icon" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "provenance" (
	"id" integer PRIMARY KEY NOT NULL,
	"avatar" text NOT NULL,
	"history" boolean NOT NULL,
	"content" text NOT NULL,
	"contentby" text NOT NULL,
	"date" text NOT NULL,
	"url" text NOT NULL,
	"price" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "statistics" (
	"id" integer PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"avatar" text,
	"history" boolean,
	"title" text NOT NULL,
	"login" text,
	"image" text,
	"category" text
);
