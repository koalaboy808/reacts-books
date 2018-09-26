import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div> Select a book to get started! </div>
    }

    return (
      <div>
        <h3> Details for: </h3>
        <p> Title: {this.props.book.title} </p>
        <p> Pages: {this.props.book.pages} </p>
      </div>
    )
  }
}

// this function is the glue between react and redux
function mapStateToProps(state) {
  //whatever is returned will show up as props in BookDetail
  return {
    // state coming from reducer index.js
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
