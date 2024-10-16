import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Details from "./Details";
import { Bids } from "database/type";

const MintNFTPage = () => {
  const [bidInfo, setBidInfo] = useState<Bids[]>([
    {
      id: 0,
      bid: "1.1ETH",
      price: "$1,815.70",
      time: 20,
      image: "/images/main-pic-1.jpg",
      title: "Escape",
      date: "Minted on Aug 18, 2022",
      content:
        "We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.",
    },
  ]);
  const [statistics, setStatistics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bids")
      .then((response) => response.json())
      .then((data) => setBidInfo(data))
      .finally(() => setIsLoading(false));
    fetch("/api/statistics")
      .then((response) => response.json())
      .then((data) => setStatistics(data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <Layout layoutNoOverflow headerHide footerHide>
      <Description
        exit
        image={bidInfo[0].image}
        title={bidInfo[0].title}
        date={bidInfo[0].date}
        statistics={statistics}
        content={
          <>
            <p>{bidInfo[0].content}</p>
            <p>Official website: ui8.net</p>
          </>
        }
      >
        <Details />
      </Description>
    </Layout>
  );
};

export default MintNFTPage;
