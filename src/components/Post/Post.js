import { Fragment } from "react";

import Author from '../Author'

const Post = ({ title, text, author }) => {
  return (
    <Fragment>
      <h3>{ title }</h3>
      <p>{ text }</p>

      <Author { ...author } />
    </Fragment>
  );
}

export default Post
