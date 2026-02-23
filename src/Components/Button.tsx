import type { ReactNode } from "react";
import "./css/Button.css";

type Button = {
  children: ReactNode;
  variant: "primary" | "secondary";
  isActive?: boolean;
};

function Button({ children, variant, isActive }: Button) {
  return <button className={`${variant} ${isActive && "active"}`}>{children}</button>;
}

export default Button;
