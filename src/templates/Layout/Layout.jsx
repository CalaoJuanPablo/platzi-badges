import React from "react";
import { Navbar } from "../../components";

export function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
