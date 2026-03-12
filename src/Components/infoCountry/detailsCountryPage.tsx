import type { ReactNode } from "react";
import Card from "../card/Card";
import styles from "./detailsCountryPage.module.css";

interface IDetailsCountryPage {
  title?: ReactNode;
  subtitle?: ReactNode;
  value: ReactNode;
}

function DetailsCountryPage({ title, subtitle, value }: IDetailsCountryPage) {
  return (
    <Card>
      <div className={styles.container}>
        <h5>{title}</h5>
        <h4>{subtitle}</h4>
        <h2>{value}</h2>
      </div>
    </Card>
  );
}

export default DetailsCountryPage;
