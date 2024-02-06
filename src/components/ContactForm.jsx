import React from 'react';

export default class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      // Permite doar litere, apostrof, liniuță și spații
      if (/^[a-zA-Z' -]*$/.test(value)) {
        this.setState({ [name]: value });
      }
    } else if (name === 'number') {
      // Permite doar numere
      if (!value || /^\d+$/.test(value)) {
        this.setState({ [name]: value });
      }
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <input
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          placeholder="Number"
          type="tel"
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
