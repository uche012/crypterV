import cn from "classnames";
import styles from "./CollectionCreators.module.sass";
import Collection from "./Collection";
import TopUsers from "./TopUsers";

// import { collectionsCreators } from "@/mocks/collections";
// import { creators } from "@/mocks/creators";
// import { collectors } from "@/mocks/collectors";
import { CollectionsCreators, Creators, Collectors } from "database/type";
import { useEffect, useState } from "react";

type CollectionCreatorsProps = {};

const CollectionCreators = ({}: CollectionCreatorsProps) => {
  const [collectionsCreators, setCollectionsCreators] = useState<
    CollectionsCreators[]
  >([]);
  const [creators, setCreators] = useState<Creators[]>([]);
  const [collectors, setCollectors] = useState<Collectors[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/collections-creators")
      .then((response) => response.json())
      .then((data) => setCollectionsCreators(data))
      .finally(() => setIsLoading(false));
    fetch("/api/creators")
      .then((response) => response.json())
      .then((data) => setCreators(data))
      .finally(() => setIsLoading(false));
    fetch("/api/collectors")
      .then((response) => response.json())
      .then((data) => setCollectors(data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={cn("h1", styles.title)}>
          Collection<br></br> from creators<br></br> you follow
        </div>
        <div className={styles.list}>
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            collectionsCreators.map((collection, index) => (
              <Collection
                className={styles.collection}
                item={collection}
                key={index}
              />
            ))
          )}
        </div>
        <div className={styles.btns}>
          <button className={cn("button-stroke button-medium", styles.button)}>
            load more
          </button>
        </div>
      </div>
      <div className={styles.col}>
        <TopUsers
          className={styles.users}
          title="Top creators of&nbsp;the&nbsp;week."
          items={creators}
        />
        <TopUsers
          className={styles.users}
          title="Top collectors of&nbsp;the&nbsp;week."
          items={collectors}
        />
      </div>
    </div>
  );
};

export default CollectionCreators;
