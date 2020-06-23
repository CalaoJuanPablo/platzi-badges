import React from "react";
import { Gravatar } from "../Gravatar";
import logo from "../../images/badge-header.svg";
import "./Badge.css";

export class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <header className="Badge__header">
          <figure>
            <img src={logo} alt="Logo de la Conf" />
          </figure>
        </header>
        <section className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </section>
        <section className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <p>@{this.props.twitter}</p>
        </section>
        <footer className="Badge__footer">#platziconf</footer>
      </div>
    );
  }
}
