CREATE TABLE IF NOT EXISTS "collectors" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"login" text NOT NULL,
	"sale" text NOT NULL,
	"avatar" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "creators" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"login" text NOT NULL,
	"sale" text NOT NULL,
	"avatar" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discover" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"avatar" text NOT NULL,
	"login" text NOT NULL,
	"time" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "followers" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"login" text NOT NULL,
	"avatar" text NOT NULL,
	"crypto" text NOT NULL,
	"follow" boolean NOT NULL,
	"history" boolean NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "following" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"login" text NOT NULL,
	"avatar" text NOT NULL,
	"crypto" text NOT NULL,
	"follow" boolean NOT NULL,
	"history" boolean NOT NULL,
	"url" text NOT NULL
);
