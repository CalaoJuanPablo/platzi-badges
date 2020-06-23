import React from "react";
import { Navbar, Badge } from "../../components";
import logo from "../../images/badge-header.svg";
import "./BadgeNews.css";

export class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                avatarUrl="https://avatars1.githubusercontent.com/u/31701636?s=460&u=08b897bbccbdfbbbac6e3acdf8fc701d912d367c&v=4"
                firstName="Juan Pablo"
                lastName="Calao"
                jobTitle="Frontend Developer"
                twitter="CalaoJuanPablo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
