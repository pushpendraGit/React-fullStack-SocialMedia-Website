import React from "react";
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/posts';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }
  
  render() {

    console.log('Your Props is',this.props);
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

function mapStateToProps(state){

  return {

    posts:state.posts
  }


}

export default connect(mapStateToProps)(App);