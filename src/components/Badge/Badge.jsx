import React from "react";
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
          <img
            className="Badge__avatar"
            src="https://gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            Juan Pablo
            <br />
            Calao
          </h1>
        </section>
        <section className="Badge__section-info">
          <h3>Frontend Developer</h3>
          <p>@CalaoJuanPablo</p>
        </section>
        <footer className="Badge__footer">#platziconf</footer>
      </div>
    );
  }
}
