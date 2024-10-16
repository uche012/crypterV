import { Spotlight } from "database/type";
import { seedTable } from "./seedTable";
import { spotlight } from "database/schema";

const data: Spotlight[] = [
  {
    id: 1,
    title: "The Currency",
    price: "12.29 ETH",
    image: "/images/projects/image-1.jpg",
    url: "/nft",
    users: [
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-3.jpg",
    ],
  },
  {
    id: 2,
    title: "CutePlanet®",
    price: "12.29 ETH",
    image: "/images/projects/image-2.jpg",
    url: "/nft",
    users: ["/images/users/avatar-1.jpg", "/images/users/avatar-3.jpg"],
  },
  {
    id: 3,
    title: "The Currency",
    price: "12.29 ETH",
    image: "/images/projects/image-3.jpg",
    url: "/nft",
    users: ["/images/users/avatar-1.jpg", "/images/users/avatar-2.jpg"],
  },
  {
    id: 4,
    title: "The Currency",
    price: "12.29 ETH",
    image: "/images/projects/image-4.jpg",
    url: "/nft",
    users: [
      "/images/users/avatar-4.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-5.jpg",
    ],
  },
  {
    id: 5,
    title: "The Currency",
    price: "12.29 ETH",
    image: "/images/projects/image-5.jpg",
    url: "/nft",
    users: [
      "/images/users/avatar-3.jpg",
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-5.jpg",
    ],
  },
  {
    id: 6,
    title: "CutePlanet®",
    price: "12.29 ETH",
    image: "/images/projects/image-6.jpg",
    url: "/nft",
    users: ["/images/users/avatar-2.jpg", "/images/users/avatar-3.jpg"],
  },
  {
    id: 7,
    title: "The Currency",
    price: "12.29 ETH",
    image: "/images/projects/image-7.jpg",
    url: "/nft",
    users: ["/images/users/avatar-1.jpg", "/images/users/avatar-2.jpg"],
  },
  {
    id: 8,
    title: "Robot: One",
    price: "12.29 ETH",
    image: "/images/projects/image-8.jpg",
    url: "/nft",
    users: [
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-3.jpg",
    ],
  },
  {
    id: 9,
    title: "Mars",
    price: "12.29 ETH",
    image: "/images/projects/image-9.jpg",
    url: "/nft",
    users: [
      "/images/users/avatar-3.jpg",
      "/images/users/avatar-4.jpg",
      "/images/users/avatar-5.jpg",
    ],
  },
  {
    id: 10,
    title: "CutePlanet®",
    price: "12.29 ETH",
    image: "/images/projects/image-10.jpg",
    url: "/nft",
    users: ["/images/users/avatar-1.jpg", "/images/users/avatar-3.jpg"],
  },
  {
    id: 11,
    title: "The Currency",
    price: "12.29 ETH",
    image: "/images/projects/image-11.jpg",
    url: "/nft",
    users: [
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-3.jpg",
    ],
  },
  {
    id: 12,
    title: "The Currency",
    price: "12.29 ETH",
    image: "/images/projects/image-12.jpg",
    url: "/nft",
    users: ["/images/users/avatar-2.jpg", "/images/users/avatar-3.jpg"],
  },
];

export const seedSpotlight = async () => {
  await seedTable(spotlight, data, spotlight.id);
};
