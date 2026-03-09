import type { ReactNode } from "react";
import "./Button.css";

type Button = {
  children?: ReactNode;
  variant: "primary" | "secondary" | "terciary";
  isActive?: boolean;
  onClick?: () => void;
};

function Button({ children, variant, isActive, onClick }: Button) {
  return (
    <button className={`${variant} ${isActive && "active"}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
