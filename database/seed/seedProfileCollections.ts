import { ProfileCollections } from "database/type";
import { seedTable } from "./seedTable";
import { profileCollections } from "database/schema";

const data: ProfileCollections[] = [
  {
    id: 1,
    title: "Escape II",
    image: "/images/collection/collection-1.jpg",
    balance: 22.4,
    floor: "1.00 ETH",
    category: "ESCP",
    categoryImage: "/images/collection/collection-5.jpg",
    users: [
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-3.jpg",
    ],
    url: "/collection",
  },
  {
    id: 2,
    title: "Escape II",
    image: "/images/collection/collection-2.jpg",
    balance: 45.2,
    floor: "14.34 ETH",
    category: "ESCP",
    categoryImage: "/images/collection/collection-4.jpg",
    users: ["/images/users/avatar-4.jpg", "/images/users/avatar-5.jpg"],
    url: "/collection",
  },
  {
    id: 3,
    title: "Escape II",
    image: "/images/collection/collection-3.jpg",
    balance: -9.4,
    floor: "3.56 ETH",
    category: "ESCP",
    categoryImage: "/images/collection/collection-2.jpg",
    users: [
      "/images/users/avatar-5.jpg",
      "/images/users/avatar-3.jpg",
      "/images/users/avatar-1.jpg",
    ],
    url: "/collection",
  },
  {
    id: 4,
    title: "Escape II",
    image: "/images/collection/collection-4.jpg",
    balance: 55.7,
    floor: "23.02 ETH",
    category: "ESCP",
    categoryImage: "/images/collection/collection-1.jpg",
    users: [
      "/images/users/avatar-1.jpg",
      "/images/users/avatar-2.jpg",
      "/images/users/avatar-3.jpg",
    ],
    url: "/collection",
  },
  {
    id: 5,
    title: "Escape II",
    image: "/images/collection/collection-5.jpg",
    balance: -6.8,
    floor: "5.44 ETH",
    category: "ESCP",
    categoryImage: "/images/collection/collection-1.jpg",
    users: [
      "/images/users/avatar-3.jpg",
      "/images/users/avatar-4.jpg",
      "/images/users/avatar-5.jpg",
    ],
    url: "/collection",
  },
];

export const seedProfileCollections = async () => {
  await seedTable(profileCollections, data, profileCollections.id);
};
