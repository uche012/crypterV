import Layout from "@/components/Layout";
import Main from "./Main";
import Hot from "./Hot";
import Dream from "./Dream";
import Collections from "./Collections";
import Auctions from "@/components/Auctions";
import Spotlight from "./Spotlight";
import Creativity from "./Creativity";
import Newsletter from "@/components/Newsletter";

// import { auctions } from "@/mocks/auctions";
import { AuctionsType } from "database/type";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [auctions, setAuctions] = useState<AuctionsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auctions")
      .then((response) => response.json())
      .then((data) => setAuctions(data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <Layout layoutNoOverflow noRegistration>
      <Main />
      <Hot />
      <Dream />
      <Collections />
      <Auctions items={auctions} />
      <Spotlight />
      <Creativity />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
