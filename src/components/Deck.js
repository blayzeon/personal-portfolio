import React from "react";
import Card from "./Card.js";

export default function Deck(props) {
  return (
    <>
      {props.data.map((item) => {
        return (
          <Card
            title={item.title}
            text={item.text}
            img={item.img}
            key={item.title}
            demo={item.demo}
            github={item.github}
          />
        );
      })}
    </>
  );
}
