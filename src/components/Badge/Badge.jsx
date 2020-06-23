import React from "react";

export class Badge extends React.Component {
  render() {
    return (
      <div>
        <header>
          <figure>
            <img src="" alt="Logo de la Conf" />
          </figure>
        </header>
        <section>
          <figure>
            <img src="" alt="Avatar" />
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
