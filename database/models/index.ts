import { curatedCollections } from "./curatedCollections";
import { hotArtists } from "./hotArtists";
import { spotlight } from "./spotlight";
import { nfts } from "./nfts";
import { tokenNfts } from "./tokenNfts";
import { profileCollections } from "./profileCollections";
import { activityCollections } from "./activityCollections";
import { collectionsCreators } from "./collectionsCreators";
import { followers } from "./followers";
import { following } from "./following";
import { creators } from "./creators";
import { discover } from "./discover";
import { collectors } from "./collectors";
import { activities } from "./activities";
import { artists } from "./artists";
import { artistsWeek } from "./artistsWeek";
import { auctions } from "./auctions";
import { blog } from "./blog";
import { blogSlider } from "./blogSlider";
import { help } from "./help";
import { helpCategories } from "./helpCategories";
import { helpDetail } from "./helpDetail";
import { bids, statistics, links, provenance } from "./bids";

type Models = {
  hotArtists: typeof hotArtists;
  curatedCollections: typeof curatedCollections;
  spotlight: typeof spotlight;
  nfts: typeof nfts;
  tokenNfts: typeof tokenNfts;
  profileCollections: typeof profileCollections;
  activityCollections: typeof activityCollections;
  collectionsCreators: typeof collectionsCreators;
  followers: typeof followers;
  following: typeof following;
  creators: typeof creators;
  discover: typeof discover;
  collectors: typeof collectors;
  activities: typeof activities;
  artists: typeof artists;
  artistsWeek: typeof artistsWeek;
  auctions: typeof auctions;
  blog: typeof blog;
  blogSlider: typeof blogSlider;
  help: typeof help;
  helpCategories: typeof helpCategories;
  helpDetail: typeof helpDetail;
  bids: typeof bids;
  statistics: typeof statistics;
  links: typeof links;
  provenance: typeof provenance;
};

export const models: Models = {
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
};
