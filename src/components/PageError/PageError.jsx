import React from "react";
import "./PageError.css";

export function PageError(props) {
  return <div className="PageError">{props.error.message}</div>;
}
