import React, {Component} from 'react'
// import BookListItem from './book_list_item'
import {connect} from 'react-redux'

// delete 'export default' because want to export redux object
// promote Booklist to container by using connect function from react-redux
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      console.log(book.title);
      return (
        <li key={book.title} className="list-group-item">
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

// connect takes a function and a component
// with that, it produces a container
// first argument of function will return as the state for this.props
export default connect(mapStateToProps)(BookList);
