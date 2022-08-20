import React from "react";
import Ul from "./Ul";

export default function Card(props) {
  const title = props.title ? props.title : "Title";
  const text = props.text
    ? props.text
    : "Lorem ipsum dolor sit, amet consectetur.";
  const src = `${process.env.PUBLIC_URL}/img/${props.img}`;

  const buttons = [
    {
      icon: "devicon-github-original",
      url: props.github,
    },
    {
      span: "link",
      url: props.demo,
    },
  ];

  return (
    <div className="card shadow">
      <a target="_blank" href={props.demo} className="img-link">
        <img src={src} className="card-image" />
      </a>
      <div className="card-text">
        <div className="card-title">
          <a target="_blank" href={props.demo}>
            <h4>{title}</h4>
          </a>
          <Ul items={buttons} />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
