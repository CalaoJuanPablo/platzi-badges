import React from "react";
import { Badge, BadgeForm, PageLoading } from "../../components";
import { Layout } from "../../templates";
import api from "../../api";
import logo from "../../images/platziconf-logo.svg";
import "./BadgeNews.css";

export class BadgeNew extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      loading: false,
      error: null,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
      },
    };
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      loading: false,
      error: null,
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      console.error("Error");
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
    return (
      <Layout>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                avatarUrl="https://avatars1.githubusercontent.com/u/31701636?s=460&u=08b897bbccbdfbbbac6e3acdf8fc701d912d367c&v=4"
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "TWITTER_USER"}
                email={this.state.form.email || "EMAIL@EXAMPLE.COM"}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                form={this.state.form}
                error={this.state.error}
                onFormSubmit={this.handleFormSubmit}
                onInputChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
