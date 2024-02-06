import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <h2>Contacts</h2>
        <input
          type="text"
          placeholder="Search Contacts"
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}
