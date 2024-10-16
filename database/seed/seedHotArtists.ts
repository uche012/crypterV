import { HotArtist } from "database/type";
import { seedTable } from "./seedTable";
import { hotArtists } from "database/schema";

const data: HotArtist[] = [
  {
    id: 1,
    login: "randomdash",
    total: "12.29 ETH",
    avatar: "/images/artists/artist-1.jpg",
    url: "/profile",
  },
  {
    id: 2,
    login: "kohaku",
    total: "24.35 ETH",
    avatar: "/images/artists/artist-2.jpg",
    url: "/profile",
  },
  {
    id: 3,
    login: "gelo",
    total: "9.55 ETH",
    avatar: "/images/artists/artist-3.jpg",
    url: "/profile",
  },
  {
    id: 4,
    login: "elnafrederick",
    total: "2.29 ETH",
    avatar: "/images/artists/artist-4.jpg",
    url: "/profile",
  },
  {
    id: 5,
    login: "_kolahon",
    total: "12.29 ETH",
    avatar: "/images/artists/artist-5.jpg",
    url: "/profile",
  },
  {
    id: 6,
    login: "mcbess",
    total: "17.65 ETH",
    avatar: "/images/artists/artist-6.jpg",
    url: "/profile",
  },
  {
    id: 7,
    login: "aaronpenne",
    total: "77.29 ETH",
    avatar: "/images/artists/artist-7.jpg",
    url: "/profile",
  },
  {
    id: 8,
    login: "nocellcoverage",
    total: "12.55 ETH",
    avatar: "/images/artists/artist-8.jpg",
    url: "/profile",
  },
];

export const seedHotArtists = async () => {
  await seedTable(hotArtists, data, hotArtists.id);
};
