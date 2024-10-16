import { AuctionsType } from "database/type";
import { seedTable } from "./seedTable";
import { auctions } from "database/schema";

const data: AuctionsType[] = [
  {
    id: 1,
    login: "randomdash",
    crypto: "8.00 ETH",
    price: "$24,635.39",
    image: "/images/auction-pic-1.jpg",
    avatar: "/images/artists/artist-1.jpg",
    timeHours: 24,
    url: "/nft/current-bid",
  },
  {
    id: 2,
    login: "tranmautritam",
    crypto: "12.50 ETH",
    price: "$13,434.12",
    image: "/images/auction-pic-2.jpg",
    avatar: "/images/artists/artist-2.jpg",
    timeHours: 12,
    url: "/nft/current-bid",
  },
  {
    id: 3,
    login: "randomdash",
    crypto: "33.11 ETH",
    price: "$9,111.89",
    image: "/images/auction-pic-1.jpg",
    avatar: "/images/artists/artist-3.jpg",
    timeHours: 16,
    url: "/nft/current-bid",
  },
];

export const seedAuctions = async () => {
  await seedTable(auctions, data, auctions.id);
};
