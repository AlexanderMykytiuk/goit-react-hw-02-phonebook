import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  hendleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmitForm = (e) => {
    e.preventDefault();

      this.props.sabmit(this.state);
      this.reset()
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <div>
            <form onSubmit={this.hendleSubmitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.hendleInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.hendleInputChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
