import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./HelpPage.module.sass";
import Layout from "@/components/Layout";
import Form from "@/components/Form";
import Category from "./Category";

// import { help } from "@/mocks/help";
import { Help } from "database/type";

const HelpPage = () => {
  const [search, setSearch] = useState<string>("");
  const [help, setHelp] = useState<Help[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/help")
      .then((response) => response.json())
      .then((data) => setHelp(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Layout layoutNoOverflow footerHide>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.wrap}>
            <div className={cn("hero", styles.title)}>Help center</div>
            <div className={styles.content}>
              We are laying the groundwork for web3 — the next generation of the
              internet full of limitless possibilities.{" "}
            </div>
            <Form
              className={styles.form}
              placeholder="Search topics"
              value={search}
              setValue={setSearch}
              onSubmit={() => console.log("Submit")}
              buttonRight
            />
          </div>
        </div>
        <div className={styles.col}>
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            help.map((category, index) => (
              <Category item={category} key={index} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HelpPage;
