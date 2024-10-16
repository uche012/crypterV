import { Creators } from "database/type";
import { seedTable } from "./seedTable";
import { creators } from "database/schema";

const data: Creators[] = [
  {
    id: 1,
    name: "Dash",
    login: "randomdash",
    sale: "2.00 ETH",
    avatar: "/images/artists/artist-1.jpg",
    url: "/profile",
  },
  {
    id: 2,
    name: "Kohaku Tora",
    login: "kohaku",
    sale: "4.32 ETH",
    avatar: "/images/artists/artist-2.jpg",
    url: "/profile",
  },
  {
    id: 3,
    name: "Dash",
    login: "randomdash",
    sale: "15.64 ETH",
    avatar: "/images/artists/artist-3.jpg",
    url: "/profile",
  },
  {
    id: 4,
    name: "Kohaku",
    login: "kohaku",
    sale: "0.94 ETH",
    avatar: "/images/artists/artist-4.jpg",
    url: "/profile",
  },
  {
    id: 5,
    name: "Dash",
    login: "randomdash",
    sale: "7.68 ETH",
    avatar: "/images/artists/artist-5.jpg",
    url: "/profile",
  },
];

export const seedCreators = async () => {
  await seedTable(creators, data, creators.id);
};
