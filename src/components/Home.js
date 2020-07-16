import React from 'react';
import PostsList from './PostsList';

class Home extends React.Component {
    render() {

        const {posts} =  this.props;
        console.log('Your Home Props is', this.props)
        return (
            <div className="home">
                <PostsList  posts= {posts} />
                
            </div>
        );
    }
}

export default Home;