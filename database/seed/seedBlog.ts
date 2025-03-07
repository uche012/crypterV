import { Blog } from "database/type";
import { seedTable } from "./seedTable";
import { blog } from "database/schema";

const data: Blog[] = [
  {
    id: 1,
    title: "8 things you didn't know you could do on Crypter",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    image: "/images/blog-pic-1.jpg",
    author: "Crypter II",
    date: "26 Aug 2022",
    avatar: "/images/author-1.jpg",
    history: true,
    url: "/blog/detail",
  },
  {
    id: 2,
    title: "Introducing CrypterOS the operating system for web3.",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    image: "/images/blog-pic-2.jpg",
    author: "Crypter II",
    date: "22 Aug 2022",
    avatar: "/images/author-1.jpg",
    history: true,
    url: "/blog/detail",
  },
  {
    id: 3,
    title: "8 things you didn't know you could do on Crypter",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    image: "/images/blog-pic-3.jpg",
    author: "Crypter II",
    date: "15 Aug 2022",
    avatar: "/images/author-1.jpg",
    history: true,
    url: "/blog/detail",
  },
  {
    id: 4,
    title: "8 things you didn't know you could do on Crypter",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    image: "/images/blog-pic-4.jpg",
    author: "Crypter II",
    date: "12 Aug 2022",
    avatar: "/images/author-1.jpg",
    history: true,
    url: "/blog/detail",
  },
];

export const seedBlog = async () => {
  await seedTable(blog, data, blog.id);
};
