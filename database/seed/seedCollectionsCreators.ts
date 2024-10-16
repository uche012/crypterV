import { CollectionsCreators } from "database/type";
import { seedTable } from "./seedTable";
import { collectionsCreators } from "database/schema";

const data: CollectionsCreators[] = [
  {
    id: 1,
    title: "Escape",
    login: "randomdash",
    photo: "/images/collection/pic-1.jpg",
    image: "/images/main-pic-2.jpg",
    avatar: "/images/artists/artist-1.jpg",
    url: "/collection",
  },
  {
    id: 2,
    title: "Escape II",
    login: "tranmautritam",
    photo: "/images/collection/pic-2.jpg",
    image: "/images/main-pic-2.jpg",
    avatar: "/images/artists/artist-4.jpg",
    url: "/collection",
  },
  {
    id: 3,
    title: "Escape",
    login: "randomdash",
    photo: "/images/collection/pic-3.jpg",
    image: "/images/main-pic-2.jpg",
    avatar: "/images/artists/artist-5.jpg",
    url: "/collection",
  },
  {
    id: 4,
    title: "Escape",
    login: "tranmautritam",
    photo: "/images/collection/pic-4.jpg",
    image: "/images/main-pic-2.jpg",
    avatar: "/images/artists/artist-6.jpg",
    url: "/collection",
  },
];

export const seedCollectionsCreators = async () => {
  await seedTable(collectionsCreators, data, collectionsCreators.id);
};
