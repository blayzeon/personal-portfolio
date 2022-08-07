import React from "react";

export default function Address(props) {
  const a = props.address;
  return (
    <address>
      {a.street} <br /> {a.address2 ? a.address2 : null}
      {a.address2 ? <br /> : null} {a.city}, {a.state} {a.zip}
    </address>
  );
}
