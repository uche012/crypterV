import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Spotlight.module.sass";
import Tabs from "@/components/Tabs";
import Card from "./Card";

import { tabs } from "@/mocks/spotlight";
// import { tabs, spotlight } from "@/mocks/spotlight";
import type { Spotlight } from "database/type";

type SpotlightProps = {};

const Spotlight = ({}: SpotlightProps) => {
  const [sorting, setSorting] = useState<string>("1-days");
  const [spotlight, setSpotlight] = useState<Spotlight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/spotlight")
      .then((response) => response.json())
      .then((data) => setSpotlight(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.spotlight}>
      <div className={styles.head}>
        <div className={styles.details}>
          <div className={cn("h1", styles.title)}>Spotlight.</div>
          <div className={styles.info}>Projects you&apos;ll love</div>
        </div>
        <Tabs
          className={styles.tabs}
          items={tabs}
          value={sorting}
          setValue={setSorting}
          dark
        />
      </div>
      <div className={styles.list}>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          spotlight.map((card, index) => (
            <Card className={styles.card} item={card} key={index} />
          ))
        )}
      </div>
      <div className={styles.btns}>
        <button className={cn("button-white button-counter", styles.button)}>
          explorer more
          <span>109</span>
        </button>
      </div>
    </div>
  );
};

export default Spotlight;
