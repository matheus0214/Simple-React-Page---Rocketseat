import React, { Component } from 'react';

import './style.css';

import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julia Alcantara",
          avatar: "https://i.pinimg.com/originals/b0/b0/cd/b0b0cd807e54edeb52dce28132a8a700.jpg"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        comments: [
          {
            id: 1,
            author: {
              name: "Josy",
              avatar: "https://i.pinimg.com/originals/a6/9f/c4/a69fc40573916fb2b8cccbcddb2eec2f.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales facilisis lectus nec hendrerit. Nullam posuere lacus eget enim aliquam, in elementum metus porta. Mauris iaculis feugiat nisl gravida venenatis. Vestibulum sodales sapien in lectus pulvinar, in ornare ligula luctus. Morbi eu quam ipsum. Suspendisse lacinia, massa ac vehicula congue, diam nunc faucibus mauris, quis vestibulum nulla lectus at dui. "
          }
        ]
      }, {
        id: 2,
        author: {
          name: "Marcio",
          avatar: "https://i.pinimg.com/originals/5d/9c/d9/5d9cd9f1b09fdac5712eafd1ab359c71.jpg"
        },
        date: "06 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales facilisis lectus nec hendrerit. Nullam posuere lacus eget enim aliquam, in elementum metus porta. Mauris iaculis feugiat nisl gravida venenatis. Vestibulum sodales sapien in lectus pulvinar, in ornare ligula luctus. Morbi eu quam ipsum. Suspendisse lacinia, massa ac vehicula congue, diam nunc faucibus mauris, quis vestibulum nulla lectus at dui.",
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postList">
        { posts.map(post => <Post key={ post.id } post={ post } />) }
      </div>
    )
  }
}

export default PostList;