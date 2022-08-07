import React from "react";

export default function Card(props) {
  const title = props.title ? props.title : "Title";
  const text = props.text
    ? props.text
    : "Lorem ipsum dolor sit, amet consectetur.";
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-text">
        <div className="card-title">
          <h4>{title}</h4>
          <div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
