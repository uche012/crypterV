CREATE TABLE IF NOT EXISTS "spotlight" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"price" text NOT NULL,
	"image" text NOT NULL,
	"url" text NOT NULL,
	"users" jsonb NOT NULL
);
