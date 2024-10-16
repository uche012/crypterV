import { Nfts } from "database/type";
import { seedTable } from "./seedTable";
import { nfts } from "database/schema";

const data: Nfts[] = [
  {
    id: 1,
    title: "The Currency",
    image: "/images/nfts/image-1.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-6.jpg",
    avatar: "/images/artists/artist-1.jpg",
    login: "elnafrederick",
    verified: true,
    bid: "0.4321 ETH",
    price: "2.00 ETH",
    url: "/nft",
  },
  {
    id: 2,
    title: "The Currency",
    image: "/images/nfts/image-2.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-5.jpg",
    avatar: "/images/artists/artist-5.jpg",
    login: "randomdash",
    verified: false,
    bid: "1.8574 ETH",
    price: "4.32 ETH",
    url: "/nft",
  },
  {
    id: 3,
    title: "The Currency",
    image: "/images/nfts/image-3.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-3.jpg",
    avatar: "/images/artists/artist-3.jpg",
    login: "elnafrederick",
    verified: true,
    bid: "0.4321 ETH",
    price: "2.00 ETH",
    url: "/nft",
  },
  {
    id: 4,
    title: "The Currency",
    image: "/images/nfts/image-4.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-2.jpg",
    avatar: "/images/artists/artist-4.jpg",
    login: "randomdash",
    verified: true,
    bid: "2.8574 ETH",
    price: "5.55 ETH",
    url: "/nft",
  },
  {
    id: 5,
    title: "The Currency",
    image: "/images/nfts/image-5.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-1.jpg",
    avatar: "/images/artists/artist-1.jpg",
    login: "elnafrederick",
    verified: true,
    bid: "0.4321 ETH",
    price: "2.00 ETH",
    url: "/nft",
  },
  {
    id: 6,
    title: "The Currency",
    image: "/images/nfts/image-6.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-8.jpg",
    avatar: "/images/artists/artist-5.jpg",
    login: "randomdash",
    verified: false,
    bid: "1.8574 ETH",
    price: "4.32 ETH",
    url: "/nft",
  },
  {
    id: 7,
    title: "The Currency",
    image: "/images/nfts/image-7.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-3.jpg",
    avatar: "/images/artists/artist-3.jpg",
    login: "elnafrederick",
    verified: true,
    bid: "0.4321 ETH",
    price: "2.00 ETH",
    url: "/nft",
  },
  {
    id: 8,
    title: "The Currency",
    image: "/images/nfts/image-8.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-2.jpg",
    avatar: "/images/artists/artist-4.jpg",
    login: "randomdash",
    verified: true,
    bid: "2.8574 ETH",
    price: "5.55 ETH",
    url: "/nft",
  },
  {
    id: 9,
    title: "The Currency",
    image: "/images/nfts/image-9.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-6.jpg",
    avatar: "/images/artists/artist-1.jpg",
    login: "elnafrederick",
    verified: true,
    bid: "0.4321 ETH",
    price: "2.00 ETH",
    url: "/nft",
  },
  {
    id: 10,
    title: "The Currency",
    image: "/images/nfts/image-10.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-5.jpg",
    avatar: "/images/artists/artist-5.jpg",
    login: "randomdash",
    verified: false,
    bid: "1.8574 ETH",
    price: "4.32 ETH",
    url: "/nft",
  },
  {
    id: 11,
    title: "The Currency",
    image: "/images/nfts/image-11.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-3.jpg",
    avatar: "/images/artists/artist-3.jpg",
    login: "elnafrederick",
    verified: true,
    bid: "0.4321 ETH",
    price: "2.00 ETH",
    url: "/nft",
  },
  {
    id: 12,
    title: "The Currency",
    image: "/images/nfts/image-12.jpg",
    category: "ESCP",
    imageCategory: "/images/collection/image-2.jpg",
    avatar: "/images/artists/artist-4.jpg",
    login: "randomdash",
    verified: true,
    bid: "2.8574 ETH",
    price: "5.55 ETH",
    url: "/nft",
  },
];

export const seedNfts = async () => {
  await seedTable(nfts, data, nfts.id);
};
