CREATE TABLE IF NOT EXISTS "activities" (
	"id" integer PRIMARY KEY NOT NULL,
	"nft" text NOT NULL,
	"fromAvatar" text NOT NULL,
	"fromLogin" text NOT NULL,
	"toAvatar" text NOT NULL,
	"toLogin" text NOT NULL,
	"price" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "artists" (
	"id" integer PRIMARY KEY NOT NULL,
	"login" text NOT NULL,
	"avatar" text NOT NULL,
	"price" text NOT NULL,
	"follow" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "artists-week" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"avatar" text NOT NULL,
	"sale" text NOT NULL,
	"crypto" text NOT NULL,
	"price" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auctions" (
	"id" integer PRIMARY KEY NOT NULL,
	"login" text NOT NULL,
	"crypto" text NOT NULL,
	"price" text NOT NULL,
	"image" text NOT NULL,
	"avatar" text NOT NULL,
	"timeHours" integer NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blog" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"image" text NOT NULL,
	"author" text NOT NULL,
	"date" text NOT NULL,
	"avatar" text NOT NULL,
	"history" boolean NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blog-slider" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"content" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "help" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"image" text NOT NULL,
	"color" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "help-categories" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"links" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "help-detail" (
	"id" integer PRIMARY KEY NOT NULL,
	"image" text NOT NULL,
	"content" jsonb NOT NULL
);
