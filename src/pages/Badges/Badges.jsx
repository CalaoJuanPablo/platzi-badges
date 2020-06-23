import React from "react";
import { Link } from "react-router-dom";
import { BadgesList, PageLoading } from "../../components";
import { Layout } from "../../templates";
import api from "../../api";
import "./Badges.css";
import confLogo from "../../images/badge-header.svg";

export class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);

    this.state = {
      loading: false,
      error: null,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Layout>
          <PageLoading />
        </Layout>
      );
    }

    if (this.state.error) {
      return (
        <Layout>
          <h1>Error: {this.state.error.message}</h1>
        </Layout>
      );
    }

    if (this.state.loading) {
      return (
        <Layout>
          <h1>Loading...</h1>
        </Layout>
      );
    }

    return (
      <Layout>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__container">
          <BadgesList data={this.state.data} />
        </div>
      </Layout>
    );
  }
}
