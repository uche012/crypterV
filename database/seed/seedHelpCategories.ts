import { HelpCategories } from "database/type";
import { seedTable } from "./seedTable";
import { helpCategories } from "database/schema";

const data: HelpCategories[] = [
  {
    id: 1,
    title: "Buying",
    links: [
      {
        title: "Connect your wallet to Crypter",
        url: "/help/detail",
      },
      {
        title: "Guide to collection NFT artworks on Crypter",
        url: "/help/detail",
      },
      {
        title: "Marketplace balance",
        url: "/help/detail",
      },
      {
        title: "Marketplace fees",
        url: "/help/detail",
      },
      {
        title: "What is offer price?",
        url: "/help/detail",
      },
    ],
  },
  {
    id: 2,
    title: "Selling",
    links: [
      {
        title: "Connect your wallet to Crypter",
        url: "/help/detail",
      },
      {
        title: "Guide to collection NFT artworks on Crypter",
        url: "/help/detail",
      },
      {
        title: "Marketplace balance",
        url: "/help/detail",
      },
      {
        title: "Marketplace fees",
        url: "/help/detail",
      },
      {
        title: "What is offer price?",
        url: "/help/detail",
      },
    ],
  },
  {
    id: 3,
    title: "Creating",
    links: [
      {
        title: "Connect your wallet to Crypter",
        url: "/help/detail",
      },
      {
        title: "Guide to collection NFT artworks on Crypter",
        url: "/help/detail",
      },
      {
        title: "Marketplace balance",
        url: "/help/detail",
      },
      {
        title: "Marketplace fees",
        url: "/help/detail",
      },
      {
        title: "What is offer price?",
        url: "/help/detail",
      },
    ],
  },
  {
    id: 4,
    title: "Creating",
    links: [
      {
        title: "Connect your wallet to Crypter",
        url: "/help/detail",
      },
      {
        title: "Guide to collection NFT artworks on Crypter",
        url: "/help/detail",
      },
      {
        title: "Marketplace balance",
        url: "/help/detail",
      },
      {
        title: "Marketplace fees",
        url: "/help/detail",
      },
      {
        title: "What is offer price?",
        url: "/help/detail",
      },
    ],
  },
];

export const seedHelpCategories = async () => {
  await seedTable(helpCategories, data, helpCategories.id);
};
