import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import PropTypes from "prop-types";

import { fetchPosts } from "../actions/posts";
import { PostsList, Navbar } from "./";

const Login = () => <div>This is Login</div>;
const Home = () => <div>Home</div>;

const Signup = () => <div>Users/signup</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />

          {/* <PostsList posts={posts} /> */}

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/sign">Sign-In</Link>
            </li>

            <li>
              <Link to="/signup">Sign-Up</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/sign" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
