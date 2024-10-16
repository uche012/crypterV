import { Help } from "database/type";
import { seedTable } from "./seedTable";
import { help } from "database/schema";

const data: Help[] = [
  {
    id: 1,
    title: "Gettings started on Crypter",
    content: "Learn how to create and collect artwork",
    image: "/images/help-pic-1.png",
    color: "#B9A9FB",
    url: "/help/category",
  },
  {
    id: 2,
    title: "Create Collection & NFTs",
    content: "Learn how to create and collect artwork",
    image: "/images/help-pic-2.png",
    color: "#FFA6D6",
    url: "/help/category",
  },
  {
    id: 3,
    title: "Buy & sell Artworks",
    content: "Learn how to create and collect artwork",
    image: "/images/help-pic-3.png",
    color: "#BCE6EC",
    url: "/help/category",
  },
  {
    id: 4,
    title: "Gettings started on Crypter",
    content: "Learn how to create and collect artwork",
    image: "/images/help-pic-4.png",
    color: "#1966F7",
    url: "/help/category",
  },
  {
    id: 5,
    title: "Gettings started on Crypter",
    content: "Learn how to create and collect artwork",
    image: "/images/help-pic-5.png",
    color: "#6DD3C2",
    url: "/help/category",
  },
];

export const seedHelp = async () => {
  await seedTable(help, data, help.id);
};
