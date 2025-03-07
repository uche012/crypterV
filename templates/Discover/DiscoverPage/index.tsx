import { useRef, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Catalog from "@/components/Catalog";
import Auctions from "@/components/Auctions";
import Collections from "./Collections";
import Artists from "./Artists";
import Newsletter from "@/components/Newsletter";

// import { auctions } from "@/mocks/auctions";
// import { tabsTime, nfts, statuses } from "@/mocks/nfts";
import { tabsTime, statuses } from "@/mocks/nfts";
import { Nfts, AuctionsType } from "database/type";

const HomePage = () => {
  const scrollToAll = useRef<any>(null);
  const scrollToNFTs = useRef<any>(null);
  const scrollToCollections = useRef<any>(null);
  const scrollToArtist = useRef<any>(null);

  const tabsSorting = [
    {
      title: "All",
      value: "all",
      anchor: scrollToAll,
    },
    {
      title: "NFTs",
      value: "nfts",
      counter: "456,789",
      anchor: scrollToNFTs,
    },
    {
      title: "Collections",
      value: "collections",
      counter: "123,987",
      anchor: scrollToCollections,
    },
    {
      title: "Artist",
      value: "artist",
      counter: "45,678",
      anchor: scrollToArtist,
    },
  ];

  const [nfts, setNfts] = useState<Nfts[]>([]);
  const [auctions, setAuctions] = useState<AuctionsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/nfts")
      .then((response) => response.json())
      .then((data) => setNfts(data))
      .finally(() => setIsLoading(false));
    fetch("/api/auctions")
      .then((response) => response.json())
      .then((data) => setAuctions(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Layout layoutNoOverflow noRegistration>
      <Main scrollToRef={scrollToAll} />
      <Catalog
        title="NFTs"
        tabsSorting={tabsSorting}
        tabsTime={tabsTime}
        filters={statuses}
        items={nfts}
        scrollToRef={scrollToNFTs}
      />
      <Auctions color="#DBFF73" items={auctions} />
      <Collections scrollToRef={scrollToCollections} />
      <Artists scrollToRef={scrollToArtist} />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
