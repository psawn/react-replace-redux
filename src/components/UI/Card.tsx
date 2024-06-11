import { CSSProperties, ReactNode } from "react";
import "./Card.css";

const Card = (props: { style: CSSProperties; children: ReactNode }) => {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
