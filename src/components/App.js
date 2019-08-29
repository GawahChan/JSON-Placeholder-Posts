import React, { Component } from 'react';
import Header from './Header';
import Post from './Post';
import fetchData from '../helpers/fetchData';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            myPost: [],
            inputValue: '',
        };
    }

    componentDidMount() {
        fetchData()
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
    }

    filterPosts = (inputValue) => {
        const myPost = this.state.posts.filter(post => post.userId === Number(inputValue));
        this.setState({ inputValue, myPost })
    };

    render() {
        return (
            <div className='app'>
                <Header title='Posts Page' inputValue={this.state.inputValue} filterPosts={this.filterPosts} />
                <div className='app-body'>
                    <div className='all-posts'>
                        <h2>All posts</h2>
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
                    <div className='my-posts'>
                        <h2>My posts</h2>
                        {
                            this.state.myPost.map(post => {
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
            </div>
        );
    }
}

export default App;
