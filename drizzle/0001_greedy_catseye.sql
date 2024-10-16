CREATE TABLE IF NOT EXISTS "collection_items" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"login" text NOT NULL,
	"price" text NOT NULL,
	"avatar" text NOT NULL,
	"images" jsonb NOT NULL,
	"color" text NOT NULL,
	"url" text NOT NULL
);
