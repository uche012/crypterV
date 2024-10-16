CREATE TABLE IF NOT EXISTS "token-nfts" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"price" text NOT NULL,
	"url" text NOT NULL,
	"users" jsonb NOT NULL
);
