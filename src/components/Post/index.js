import React from 'react';

import './style.css';

import PostComment from '../PostComment';

function Post({ post }) {
  const { author, date, content, comments } = post;

  return (
    <div className="boxPost">
      <div className="headerPost">
        <img src={ author.avatar } />
        <div>
          <strong>{ author.name }</strong><br />
          <small>{ date }</small>
        </div>
      </div>
      <div className="contentPost">
        <p>{ content }</p>
      </div>
      <hr />
      { comments && comments.map(comment => <PostComment key={ comment.id } comment={ comment } />) }

    </div>
  );
}

Post.defaultProps = {
  date: ''
};

export default Post;