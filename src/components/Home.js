import React, { Component } from 'react';
import { PostsList, FriendsList } from './';

class Home extends Component {
  render() {
    const { posts, friends, isLoggedin } = this.props;
    console.log('For Home Fri', friends);
    console.log('For Home log', isLoggedin);
    return (
      <div className="home">
        <PostsList posts={posts} />
        {isLoggedin && <FriendsList friends={friends} />}
      </div>
    );
  }
}

export default Home;
