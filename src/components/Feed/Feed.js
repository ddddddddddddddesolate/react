import { Fragment } from 'react';

import Post from '../Post'

const Feed = ({ posts }) => {
  return (
    <Fragment>
      <h1>Feed</h1>

      { posts.map((post) => {
        return <Post key={ post.id } { ...post } />
      }) }
    </Fragment>
  );
}

export default Feed
