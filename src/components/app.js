import React, { Component } from 'react';
import BookList from '../containers/book_list'

// app not a container because doesn't need to know about book list
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />

      </div>
    );
  }
}
