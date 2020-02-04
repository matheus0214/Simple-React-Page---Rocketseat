import React, { Component } from 'react';

/** CSS */
import './App.css';

/** Components */
import Header from './components/Header';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <PostList />
        </div>
      </>
    );
  }
}

export default App;