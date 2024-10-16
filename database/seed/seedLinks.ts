import { Links } from "database/type";
import { seedTable } from "./seedTable";
import { links } from "database/schema";

const data: Links[] = [
  {
    id: 1,
    title: "View on Etherscane",
    icon: "country",
    url: "https://ui8.net/",
  },
  {
    id: 2,
    title: "View metadata",
    icon: "link",
    url: "https://ui8.net/",
  },
  {
    id: 3,
    title: "View on IPFS",
    icon: "link",
    url: "https://ui8.net/",
  },
];

export const seedLinks = async () => {
  await seedTable(links, data, links.id);
};
