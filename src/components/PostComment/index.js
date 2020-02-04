import React from 'react';

import './style.css';

function PostComment({ comment }) {
  const { author, content } = comment;

  return (
    <div className="commentPost">
      <div className="headerPost">
        <img src={ author.avatar } />
        <div className="contentComment">
          <p><strong>{ author.name }</strong>{ content }</p>
        </div>
      </div>
    </div>
  );
}

export default PostComment;