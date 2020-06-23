import React from "react";

export class BadgeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {};
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>New Attendand</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              id="jobTitle"
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitterUsername">Twitter Username</label>
            <input
              id="twitterUsername"
              className="form-control"
              type="text"
              name="twitterUsername"
              value={this.state.twitterUsername}
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}
