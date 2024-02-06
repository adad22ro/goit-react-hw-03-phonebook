import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import './css/app.css';

class App extends React.Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    searchField: '',
  };

  addContact = newContact => {
    const isExistingContact = this.state.contacts.some(
      contact => contact.name === newContact.name
    );

    if (isExistingContact) {
      alert('This contact already exists!');
    } else {
      const contactWithId = { ...newContact, id: nanoid() };
      this.setState(
        prevState => ({
          contacts: [...prevState.contacts, contactWithId],
        }),
        () => {
          localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
      );
    }
  };

  deleteContact = id => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }),
      () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    );
  };

  handleSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { contacts, searchField } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="app-container">
        <ContactForm addContact={this.addContact} />
        <SearchBar onSearchChange={this.handleSearchChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
