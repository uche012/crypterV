import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./SetPricePage.module.sass";
import Layout from "@/components/Layout";
import Description from "@/components/Description";
import Price from "@/components/Price";
import Details from "@/components/Details";
import { Bids } from "database/type";

const MintNFTPage = () => {
  const [buy, setBuy] = useState<boolean>(false);
  const [reserve, setReserve] = useState<boolean>(false);
  const [buyValue, setBuyValue] = useState<string>("");
  const [reserveValue, setReserveValue] = useState<string>("");
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
        captionHide={buy || reserve}
        title={bidInfo[0].title}
        date={bidInfo[0].date}
        statistics={statistics}
        links={links}
        addTags
        provenance={provenance}
        content={bidInfo[0].content}
      >
        {buy && (
          <>
            <Details
              title="Set a Buy Now price"
              content={
                <>
                  <p>Buyers will be able to instantly buy the NFT.</p>
                  <p>You may edit this price at any time.</p>
                </>
              }
              linkUrl="/article"
              linkTitle="Learn how Buy Now price work"
              onClose={() => setBuy(false)}
            />
            <Price
              title="Buy now price"
              value={buyValue}
              setValue={setBuyValue}
              crypterFee="0.00 ETH"
              percent="2%"
              totalReceive="0.00 ETH"
              buttonText="set price"
              onClick={() => setBuy(false)}
              content="We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you."
            />
          </>
        )}
        {reserve && (
          <>
            <Details
              title="Set a Reserve price"
              content={
                <>
                  <p>Buyers will be able to instantly buy the NFT.</p>
                  <p>You may edit this price at any time.</p>
                </>
              }
              linkUrl="/article"
              linkTitle="Learn how Reserve price work"
              onClose={() => setReserve(false)}
            />
            <Price
              title="Reserve price"
              value={reserveValue}
              setValue={setReserveValue}
              crypterFee="0.00 ETH"
              percent="2%"
              totalReceive="0.00 ETH"
              buttonText="set price"
              onClick={() => setReserve(false)}
              content="We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you."
            />
          </>
        )}
        {!buy && !reserve && (
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.label}>Buy now</div>
              <div className={cn("h4", styles.value)}>{buyValue || "-"}</div>
              <button
                className={cn("button-medium button-wide", styles.button)}
                onClick={() => setBuy(true)}
              >
                set buy now price
              </button>
            </div>
            <div className={styles.col}>
              <div className={styles.label}>Reserve</div>
              <div className={cn("h4", styles.value)}>
                {reserveValue || "-"}
              </div>
              <button
                className={cn(
                  "button-stroke-grey button-medium button-wide",
                  styles.button
                )}
                onClick={() => setReserve(true)}
              >
                set reserve price
              </button>
            </div>
          </div>
        )}
      </Description>
    </Layout>
  );
};

export default MintNFTPage;
