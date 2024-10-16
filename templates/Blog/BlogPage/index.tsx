import Layout from "@/components/Layout";
import Main from "@/components/Main";
import Articles from "./Articles";
import Newsletter from "@/components/Newsletter";

// import { blog } from "@/mocks/blog";
import { Blog } from "database/type";
import { useEffect, useState } from "react";

const HelpDetailPage = () => {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <Layout layoutNoOverflow>
      <Main
        classTitle="hero"
        image="/images/blog.jpg"
        title="Crypter Blog"
        info="Crypter NFT marketplace blog"
      />
      <Articles items={blog} />
      <Newsletter />
    </Layout>
  );
};

export default HelpDetailPage;
