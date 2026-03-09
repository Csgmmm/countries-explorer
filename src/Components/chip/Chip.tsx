import styles from "./chip.module.css";

interface IChip {
    text: string;
    variant: "primary" | "secondary" | "terciary"
}

function Chip({text,variant}:IChip) {
  return (
    <div className={`${styles["chip"]} ${styles[variant]}`}> 
      <span>{text}</span>
    </div>
  );
}

export default Chip;