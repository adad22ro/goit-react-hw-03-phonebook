import React from 'react';

export default class ContactList extends React.Component {
  render() {
    return (
      <ul className="contact-list">
        {this.props.contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => this.props.deleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
