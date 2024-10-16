CREATE TABLE IF NOT EXISTS "activity-collections" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"login" text NOT NULL,
	"price" text NOT NULL,
	"avatar" text NOT NULL,
	"images" jsonb NOT NULL,
	"color" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "collections-creators" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"login" text NOT NULL,
	"photo" text NOT NULL,
	"image" text NOT NULL,
	"avatar" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile-collections" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"balance" real NOT NULL,
	"floor" text NOT NULL,
	"category" text NOT NULL,
	"categoryImage" text NOT NULL,
	"users" jsonb NOT NULL,
	"url" text NOT NULL
);
