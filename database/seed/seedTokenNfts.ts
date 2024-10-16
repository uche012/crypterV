import { TokenNfts } from "database/type";
import { seedTable } from "./seedTable";
import { tokenNfts } from "database/schema";

const data: TokenNfts[] = [
  {
    id: 1,
    title: "The Explorer",
    image: "/images/tokens/token-2.jpg",
    price: "12.29 ETH",
    url: "/nft",
    users: [
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Escape",
    image: "/images/tokens/token-1.jpg",
    price: "12.29 ETH",
    url: "/nft",
    users: ["/images/users/avatar-4.jpg", "/images/users/avatar-5.jpg"],
  },
  {
    id: 3,
    title: "Escape",
    image: "/images/tokens/token-3.jpg",
    price: "12.29 ETH",
    url: "/nft",
    users: [
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-4.jpg",
      "/images/users/avatar-5.jpg",
    ],
  },
  {
    id: 4,
    title: "The Explorer",
    image: "/images/tokens/token-4.jpg",
    price: "12.29 ETH",
    url: "/nft",
    users: [
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-3.jpg",
    ],
  },
  {
    id: 5,
    title: "Escape",
    image: "/images/tokens/token-5.jpg",
    price: "12.29 ETH",
    url: "/nft",
    users: [
      "/images/users/avatar-5.jpg",
      "/images/users/avatar-4.jpg",
      "/images/users/avatar-3.jpg",
    ],
  },
  {
    id: 6,
    title: "Escape",
    image: "/images/tokens/token-6.jpg",
    price: "12.29 ETH",
    url: "/nft",
    users: ["/images/users/avatar-2.jpg", "/images/users/avatar-3.jpg"],
  },
  {
    id: 7,
    title: "Escape",
    image: "/images/tokens/token-7.jpg",
    price: "12.29 ETH",
    url: "/nft",
    users: [
      "/images/users/avatar-3.jpg",
      "/images/users/avatar-4.jpg",
      "/images/users/avatar-5.jpg",
    ],
  },
  {
    id: 8,
    title: "Escape",
    image: "/images/tokens/token-8.jpg",
    price: "12.29 ETH",
    url: "/nft",
    users: [
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-3.jpg",
    ],
  },
];

export const seedTokenNfts = async () => {
  await seedTable(tokenNfts, data, tokenNfts.id);
};
