import { Collectors } from "database/type";
import { seedTable } from "./seedTable";
import { collectors } from "database/schema";

const data: Collectors[] = [
  {
    id: 1,
    name: "Dash",
    login: "randomdash",
    sale: "100.00 ETH",
    avatar: "/images/artists/artist-6.jpg",
    url: "/profile",
  },
  {
    id: 2,
    name: "Kohaku Tora",
    login: "kohaku",
    sale: "50.44 ETH",
    avatar: "/images/artists/artist-7.jpg",
    url: "/profile",
  },
  {
    id: 3,
    name: "Dash",
    login: "randomdash",
    sale: "15.64 ETH",
    avatar: "/images/artists/artist-8.jpg",
    url: "/profile",
  },
  {
    id: 4,
    name: "Kohaku",
    login: "kohaku",
    sale: "99.94 ETH",
    avatar: "/images/artists/artist-1.jpg",
    url: "/profile",
  },
  {
    id: 5,
    name: "Dash",
    login: "randomdash",
    sale: "17.68 ETH",
    avatar: "/images/artists/artist-2.jpg",
    url: "/profile",
  },
];

export const seedCollectors = async () => {
  await seedTable(collectors, data, collectors.id);
};
