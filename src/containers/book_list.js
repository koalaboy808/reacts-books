import React, {Component} from 'react';
// {connect} creates connection between book_list and our state (ie to redux)
// {connect} turns book_list from a component into a container
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
// {bindActionCreators} is a function that makes sure the 'action' flows through all the reducers
import {bindActionCreators} from 'redux';

// delete 'export default' because want to export redux object
// promote Booklist to container by using connect function from react-redux
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      console.log(book.title);
      return (
        <li
          key={book.title}
          // onClick should successfully connect actionCreator to the container
          onClick = {() => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// this function is the glue between react and redux
function mapStateToProps(state) {
  //whatever is returned will show up as props in BookList
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props in the booklist container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// mapStateToProps:
// connect takes a function and a component
// with that, it produces a container
// first argument of function will return as the state for this.props
// mapDispatchToProps:
// needs to know of this dispatch method, SelectBook.
// so through mapDispatchToProps we make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
