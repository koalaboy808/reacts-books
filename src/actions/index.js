// need to makre sure actionCreator is wired up to redux...
// can't just call it in container as an 'onclick' function
export function selectBook(book) {
  // console.log("book selected: ", book.title);

  // selectBook is an actionCreator, it needs to return an action
  // which is an object with a type property (purpose of action) &
  // optionally also a payload (a piece of data describing the action)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
