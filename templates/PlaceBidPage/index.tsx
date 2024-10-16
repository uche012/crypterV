import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Price from "@/components/Price";
import Details from "@/components/Details";
import { Bids } from "database/type";

const PlaceBidPage = () => {
  const [bid, setBid] = useState<string>("");
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
  const [links, setLinks] = useState([]);
  const [provenance, setProvenance] = useState([]);
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
    fetch("/api/links")
      .then((response) => response.json())
      .then((data) => setLinks(data))
      .finally(() => setIsLoading(false));
    fetch("/api/provenance")
      .then((response) => response.json())
      .then((data) => setProvenance(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Layout layoutNoOverflow footerHide>
      <Description
        image={bidInfo[0].image}
        captionHide
        title={bidInfo[0].title}
        date={bidInfo[0].date}
        statistics={statistics}
        links={links}
        addTags
        provenance={provenance}
        content={bidInfo[0].content}
      >
        <>
          <Details
            title="Place a bid"
            bid={bidInfo[0].bid}
            price={`$${bidInfo[0].price}`}
            time={bidInfo[0].time}
            linkUrl="/article"
            linkTitle="Learn how to place a bid"
          />
          <Price
            title={
              <>
                You must bid at least <strong>{bidInfo[0].bid}</strong>
              </>
            }
            value={bid}
            setValue={setBid}
            placeholder={bidInfo[0].bid}
            buttonText="place bid"
            content={
              <>
                <p>
                  Placing this bid will start a 24 hour auction for the NFT.
                </p>
                <p>Once a bid is placed, it cannot be withdrawn.</p>
              </>
            }
          />
        </>
      </Description>
    </Layout>
  );
};

export default PlaceBidPage;
