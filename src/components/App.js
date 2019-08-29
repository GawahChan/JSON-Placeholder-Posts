import React, { Component } from 'react';
import Header from './Header';
import Post from './Post';
import fetchData from '../helpers/fetchData';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetchData()
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <div className='all-posts'>
                    <h1>All posts</h1>
                    {
                        this.state.posts.map(post => {
                            return (
                                <Post
                                    key={post.id}
                                    userId={post.userId}
                                    postId={post.id}
                                    postTitle={post.title}
                                    postBody={post.body}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
