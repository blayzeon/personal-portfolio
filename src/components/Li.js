import React from "react";

export default function Li(props) {
  return (
    <>
      {props.item.url ? (
        <a href={props.item.url} target="_blank" className="icon-pair">
          {props.item.icon ? <i className={props.item.icon}></i> : null}
          {props.item.span ? (
            <span className="material-icons">{props.item.span}</span>
          ) : null}
          {props.item.content ? props.item.content : null}
        </a>
      ) : null}
    </>
  );
}
