import { Fragment } from "react";

const Author = ({ firstName, lastName }) => {
  return (
    <Fragment>
      <small>Author: <b>{ firstName } { lastName }</b></small>
    </Fragment>
  );
}

export default Author
