import { Provenance } from "database/type";
import { seedTable } from "./seedTable";
import { provenance } from "database/schema";

const data: Provenance[] = [
  {
    id: 1,
    avatar: "/images/avatar.jpg",
    history: true,
    content: "0x56C1...8eCC",
    contentby: "Bid placed by",
    date: "Aug 18, 2022 at 18:80",
    url: "https://ui8.net/",
    price: "5.00 ETH",
  },
  {
    id: 2,
    avatar: "/images/avatar.jpg",
    history: true,
    content: "randomdash",
    contentby: "Listed by",
    date: "Aug 18, 2022 at 18:80",
    url: "https://ui8.net/",
    price: "5.00 ETH",
  },
  {
    id: 3,
    avatar: "/images/avatar.jpg",
    history: true,
    content: "randomdash",
    contentby: "Minted by",
    date: "Aug 18, 2022 at 18:80",
    url: "https://ui8.net/",
    price: "5.00 ETH",
  },
];

export const seedProvenance = async () => {
  await seedTable(provenance, data, provenance.id);
};
