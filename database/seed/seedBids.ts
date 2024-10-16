import { Bids } from "database/type";
import { seedTable } from "./seedTable";
import { bids } from "database/schema";

const data: Bids[] = [
  {
    id: 1,
    bid: "1.1 ETH",
    price: "1,815.70",
    time: 20,
    image: "/images/main-pic-1.jpg",
    title: "Escape",
    date: "Minted on Aug 18, 2022",
    content:
      "We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.",
  },
];

export const seedBids = async () => {
  await seedTable(bids, data, bids.id);
};
