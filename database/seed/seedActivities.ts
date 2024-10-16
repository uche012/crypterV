import { Activities } from "database/type";
import { seedTable } from "./seedTable";
import { activities } from "database/schema";

const data: Activities[] = [
  {
    id: 1,
    nft: "/images/nfts/image-6.jpg",
    fromAvatar: "/images/artists/artist-1.jpg",
    fromLogin: "kohaku",
    toAvatar: "/images/artists/artist-2.jpg",
    toLogin: "randomdash",
    price: "1.0 ETH",
  },
  {
    id: 2,
    nft: "/images/nfts/image-1.jpg",
    fromAvatar: "/images/artists/artist-3.jpg",
    fromLogin: "tranmautritam",
    toAvatar: "/images/artists/artist-4.jpg",
    toLogin: "moyoshiro",
    price: "4.4 ETH",
  },
  {
    id: 3,
    nft: "/images/nfts/image-3.jpg",
    fromAvatar: "/images/artists/artist-5.jpg",
    fromLogin: "kohaku",
    toAvatar: "/images/artists/artist-6.jpg",
    toLogin: "randomdash",
    price: "12.44 ETH",
  },
  {
    id: 4,
    nft: "/images/nfts/image-4.jpg",
    fromAvatar: "/images/artists/artist-7.jpg",
    fromLogin: "tranmautritam",
    toAvatar: "/images/artists/artist-8.jpg",
    toLogin: "moyoshiro",
    price: "12.1 ETH",
  },
  {
    id: 5,
    nft: "/images/nfts/image-5.jpg",
    fromAvatar: "/images/artists/artist-1.jpg",
    fromLogin: "kohaku",
    toAvatar: "/images/artists/artist-2.jpg",
    toLogin: "randomdash",
    price: "3.33 ETH",
  },
];

export const seedActivities = async () => {
  await seedTable(activities, data, activities.id);
};
