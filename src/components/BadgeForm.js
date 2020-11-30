import React, { Component } from 'react';

class BadgeForm extends Component {

  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  }

  handleClick = (e) => {
    console.log("Click");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("from handleSubmit");


  }




  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Firs Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>

      </div>

    );
  }
}

export default BadgeForm;
