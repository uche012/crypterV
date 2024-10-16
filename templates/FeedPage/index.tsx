import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Stories from "./Stories";
import CollectionCreators from "./CollectionCreators";
import Catalog from "@/components/Catalog";
import Newsletter from "@/components/Newsletter";

// import { tabsTime, nfts, statuses } from "@/mocks/nfts";
import { tabsTime, statuses } from "@/mocks/nfts";
import { Nfts } from "database/type";

const FeedPage = () => {
  const [nfts, setNfts] = useState<Nfts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/nfts")
      .then((response) => response.json())
      .then((data) => setNfts(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Layout layoutNoOverflow>
      <Main />
      <Stories />
      <CollectionCreators />
      <Catalog
        title="Collect now"
        tabsTime={tabsTime}
        filters={statuses}
        items={nfts}
        dark
      />
      <Newsletter />
    </Layout>
  );
};

export default FeedPage;
