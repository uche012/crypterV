import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Collections.module.sass";
import Tabs from "@/components/Tabs";
import Collection from "./Collection";

// import { activityCollections } from "@/mocks/collections";
import { ActivityCollections } from "database/type";

type CollectionsProps = {
  scrollToRef: any;
};

const Collections = ({ scrollToRef }: CollectionsProps) => {
  const [sorting, setSorting] = useState<string>("1-days");

  const tabs = [
    {
      title: "1 days",
      value: "1-days",
    },
    {
      title: "7 days",
      value: "7-days",
    },
    {
      title: "30 days",
      value: "30-days",
    },
  ];

  const [activityCollections, setActivityCollections] = useState<
    ActivityCollections[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/activity-collections")
      .then((response) => response.json())
      .then((data) => setActivityCollections(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.collections} ref={scrollToRef}>
      <div className={styles.head}>
        <div className={cn("h1", styles.title)}>Most activity collections</div>
        <Tabs
          className={styles.tabs}
          items={tabs}
          value={sorting}
          setValue={setSorting}
        />
      </div>
      <div className={styles.list}>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          activityCollections.map((collection, index) => (
            <Collection
              className={styles.collection}
              item={collection}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Collections;
