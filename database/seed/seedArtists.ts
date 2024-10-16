import { Artists } from "database/type";
import { seedTable } from "./seedTable";
import { artists } from "database/schema";

const data: Artists[] = [
  {
    id: 1,
    login: "randomdash",
    avatar: "/images/artists/artist-1.jpg",
    price: "12.29 ETH",
    follow: false,
  },
  {
    id: 2,
    login: "kohaku",
    avatar: "/images/artists/artist-6.jpg",
    price: "12.29 ETH",
    follow: false,
  },
  {
    id: 3,
    login: "tranmautritam",
    avatar: "/images/artists/artist-3.jpg",
    price: "12.29 ETH",
    follow: false,
  },
  {
    id: 4,
    login: "moyoshiro",
    avatar: "/images/artists/artist-4.jpg",
    price: "12.29 ETH",
    follow: false,
  },
  {
    id: 5,
    login: "foxies",
    avatar: "/images/artists/artist-5.jpg",
    price: "12.29 ETH",
    follow: false,
  },
];

export const seedArtists = async () => {
  await seedTable(artists, data, artists.id);
};
