import type { ReactNode } from "react";
import "../card/Card.css"

interface ICard {
  children: ReactNode
}

function Card ({children}: ICard) {

  return <div className="card">{children}</div>
}

export default Card