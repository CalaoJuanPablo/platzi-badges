import React from "react";
import { Navbar } from "../../components";

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
