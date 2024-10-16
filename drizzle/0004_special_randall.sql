CREATE TABLE IF NOT EXISTS "nfts" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"category" text NOT NULL,
	"imageCategory" text NOT NULL,
	"avatar" text NOT NULL,
	"login" text NOT NULL,
	"verified" boolean NOT NULL,
	"bid" text NOT NULL,
	"price" text NOT NULL,
	"url" text NOT NULL
);
