import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Article from "./Article";
import BlogList from "./BlogList";
import Newsletter from "@/components/Newsletter";

// import { blogSlider } from "@/mocks/blog";
import { BlogSlider } from "database/type";
import { useEffect, useState } from "react";

const BlogDetailPage = () => {
  const [blogSlider, setBlogSlider] = useState<BlogSlider[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog-slider")
      .then((response) => response.json())
      .then((data) => setBlogSlider(data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <Layout layoutNoOverflow>
      <Main
        classTitle="h1"
        image="/images/blog-detail.jpg"
        title="8 things you didn't know you could do on Crypter"
        info="Crypter NFT marketplace blog"
      />
      <Article />
      <BlogList items={blogSlider} />
      <Newsletter />
    </Layout>
  );
};

export default BlogDetailPage;
