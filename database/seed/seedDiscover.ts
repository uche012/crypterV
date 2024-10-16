import { Discover } from "database/type";
import { seedTable } from "./seedTable";
import { discover } from "database/schema";

const data: Discover[] = [
  {
    id: 1,
    title: "D-0-G",
    image: "/images/main-slide-1.jpg",
    avatar: "/images/artists/artist-1.jpg",
    login: "randomdash",
    time: 20,
  },
  {
    id: 2,
    title: "Cute Dog",
    image: "/images/main-slide-2.jpg",
    avatar: "/images/artists/artist-2.jpg",
    login: "moyoshiro",
    time: 16,
  },
  {
    id: 3,
    title: "D-0-G",
    image: "/images/main-slide-1.jpg",
    avatar: "/images/artists/artist-1.jpg",
    login: "randomdash",
    time: 24,
  },
  {
    id: 4,
    title: "Cute Dog",
    image: "/images/main-slide-2.jpg",
    avatar: "/images/artists/artist-2.jpg",
    login: "moyoshiro",
    time: 16,
  },
];

export const seedDiscover = async () => {
  await seedTable(discover, data, discover.id);
};
