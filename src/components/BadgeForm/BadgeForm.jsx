import React from "react";

export class BadgeForm extends React.Component {
  render() {
    const { form, onInputChange, onFormSubmit } = this.props;
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              className="form-control"
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              className="form-control"
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              value={form.email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              id="jobTitle"
              className="form-control"
              type="text"
              name="jobTitle"
              value={form.jobTitle}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter Username</label>
            <input
              id="twitter"
              className="form-control"
              type="text"
              name="twitter"
              value={form.twitter}
              onChange={onInputChange}
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
