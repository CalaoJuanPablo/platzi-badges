import React from "react";
import { Badge, BadgeForm } from "../../components";
import { Layout } from "../../templates";
import logo from "../../images/badge-header.svg";
import "./BadgeNews.css";

export class BadgeNew extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitterUsername: "",
      },
    };
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitterUsername}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                form={this.state.form}
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
