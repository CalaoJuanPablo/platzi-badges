import React from "react";
import logo from "../../images/badge-header.svg";

export class Badge extends React.Component {
  render() {
    return (
      <div>
        <header>
          <figure>
            <img src={logo} alt="Logo de la Conf" />
          </figure>
        </header>
        <section>
          <figure>
            <img src="https://gravatar.com/avatar?d=identicon" alt="Avatar" />
          </figure>
          <div>
            <h1>
              Juan Pablo
              <br />
              Calao
            </h1>
          </div>
          <div>
            <p>Frontend Developer</p>
            <p>@CalaoJuanPablo</p>
          </div>
        </section>
        <footer>#platziconf</footer>
      </div>
    );
  }
}
