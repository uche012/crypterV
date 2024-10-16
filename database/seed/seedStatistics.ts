import { Statistics } from "database/type";
import { seedTable } from "./seedTable";
import { statistics } from "database/schema";

const data: Statistics[] = [
  {
    id: 1,
    label: "Created by",
    avatar: "/images/avatar.jpg",
    history: true,
    title: "Dash",
    login: "randomdash",
  },
  {
    id: 2,
    label: "Collection",
    image: "/images/balls.jpg",
    title: "Escape",
    category: "cute",
  },
];

export const seedStatistics = async () => {
  await seedTable(statistics, data, statistics.id);
};
