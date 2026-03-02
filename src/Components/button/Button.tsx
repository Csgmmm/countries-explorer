import type { ReactNode } from "react";
import "./Button.css";

type Button = {
  children?: ReactNode;
  variant: "primary" | "secondary";
  isActive?: boolean;
  text: string;
  onClick?: () => void;
};

function Button({ children, variant, isActive, text, onClick }: Button) {
  return (
    <button className={`${variant} ${isActive && "active"}`} onClick={onClick}>
      {children} {text}
    </button>
  );
}

export default Button;
