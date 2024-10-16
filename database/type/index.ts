import {
  hotArtists,
  curatedCollections,
  spotlight,
  nfts,
  tokenNfts,
  profileCollections,
  activityCollections,
  collectionsCreators,
  followers,
  following,
  creators,
  discover,
  collectors,
  activities,
  artists,
  artistsWeek,
  auctions,
  blog,
  blogSlider,
  help,
  helpCategories,
  helpDetail,
  bids,
  statistics,
  links,
  provenance,
} from "database/schema";

export type HotArtist = typeof hotArtists.$inferInsert;
export type CuratedCollection = typeof curatedCollections.$inferInsert;
export type Spotlight = typeof spotlight.$inferInsert;
export type Nfts = typeof nfts.$inferInsert;
export type TokenNfts = typeof tokenNfts.$inferInsert;
export type ProfileCollections = typeof profileCollections.$inferInsert;
export type ActivityCollections = typeof activityCollections.$inferInsert;
export type CollectionsCreators = typeof collectionsCreators.$inferInsert;
export type Followers = typeof followers.$inferInsert;
export type Following = typeof following.$inferInsert;
export type Creators = typeof creators.$inferInsert;
export type Discover = typeof discover.$inferInsert;
export type Collectors = typeof collectors.$inferInsert;
export type Activities = typeof activities.$inferInsert;
export type Artists = typeof artists.$inferInsert;
export type ArtistsWeek = typeof artistsWeek.$inferInsert;
export type AuctionsType = typeof auctions.$inferInsert;
export type Blog = typeof blog.$inferInsert;
export type BlogSlider = typeof blogSlider.$inferInsert;
export type Help = typeof help.$inferInsert;
export type HelpCategories = typeof helpCategories.$inferInsert;
export type HelpDetail = typeof helpDetail.$inferInsert;
export type Bids = typeof bids.$inferInsert;
export type Statistics = typeof statistics.$inferInsert;
export type Links = typeof links.$inferInsert;
export type Provenance = typeof provenance.$inferInsert;
