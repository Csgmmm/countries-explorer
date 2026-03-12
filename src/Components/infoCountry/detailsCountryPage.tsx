import type { ReactNode } from "react";
import Card from "../card/Card";
import styles from "./detailsCountryPage.module.css"

interface IDetailsCountryPage {
  title: string;
  value: ReactNode;
}

function DetailsCountryPage({ title, value }: IDetailsCountryPage) {
  return (
    <Card>
      <div className={styles.container}>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </Card>
  );
}

export default DetailsCountryPage;
