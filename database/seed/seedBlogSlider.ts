import { BlogSlider } from "database/type";
import { seedTable } from "./seedTable";
import { blogSlider } from "database/schema";

const data: BlogSlider[] = [
  {
    id: 1,
    title: "8 things you didn't know you could do on Crypter",
    image: "/images/blog-pic-1.jpg",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    url: "/blog/detail",
  },
  {
    id: 2,
    title: "8 things you didn't know you could do on Crypter",
    image: "/images/blog-pic-2.jpg",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    url: "/blog/detail",
  },
  {
    id: 3,
    title: "8 things you didn't know you could do on Crypter",
    image: "/images/blog-pic-3.jpg",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    url: "/blog/detail",
  },
  {
    id: 4,
    title: "8 things you didn't know you could do on Crypter",
    image: "/images/blog-pic-4.jpg",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    url: "/blog/detail",
  },
  {
    id: 5,
    title: "8 things you didn't know you could do on Crypter",
    image: "/images/blog-pic-1.jpg",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    url: "/blog/detail",
  },
  {
    id: 6,
    title: "8 things you didn't know you could do on Crypter",
    image: "/images/blog-pic-2.jpg",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    url: "/blog/detail",
  },
  {
    id: 7,
    title: "8 things you didn't know you could do on Crypter",
    image: "/images/blog-pic-3.jpg",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    url: "/blog/detail",
  },
  {
    id: 8,
    title: "8 things you didn't know you could do on Crypter",
    image: "/images/blog-pic-4.jpg",
    content:
      "Web3 is the next evolution of the internet built on open infrastructure where information, code, and objects are free to travel.",
    url: "/blog/detail",
  },
];

export const seedBlogSlider = async () => {
  await seedTable(blogSlider, data, blogSlider.id);
};
