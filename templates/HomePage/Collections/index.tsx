import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import styles from "./Collections.module.sass";
import Collection from "./Collection";

// import { curatedCollections } from "@/mocks/collections";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useState, useEffect } from "react";
import { CuratedCollection } from "database/type";

type CollectionsProps = {};

const Collections = ({}: CollectionsProps) => {
  const [curatedCollections, setCuratedCollections] = useState<
    CuratedCollection[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/curated-collections")
      .then((response) => response.json())
      .then((data) => setCuratedCollections(data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div className={styles.collections}>
      <div className={cn("h1", styles.title)}>Curated collections.</div>
      <div className={styles.wrapper}>
        <Swiper
          navigation={true}
          slidesPerView="auto"
          effect={"fade"}
          scrollbar={{
            hide: true,
          }}
          modules={[Navigation, Scrollbar]}
          className="collections-swiper"
        >
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            curatedCollections.map((collection, index) => (
              <SwiperSlide key={index}>
                <Collection item={collection} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Collections;
