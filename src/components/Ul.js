import React from "react";
import Li from "./Li";
import { v4 as uuid } from "uuid";

export default function Ul(props) {
  let classes = props.direction ? props.direction : "row";
  classes = classes + " flex-list large-gap";
  return (
    <ul className={classes}>
      {props.items.map((item) => {
        return (
          <li key={uuid()}>
            <Li item={item} />
          </li>
        );
      })}
    </ul>
  );
}
