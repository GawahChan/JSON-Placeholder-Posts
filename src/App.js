import React, { Component } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import SubTitle from './components/SubTitle';
import fetchData from './helpers/fetchData';
import inputs from './helpers/inputs';


import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            myPost: [],
            inputValue: '',
            displayAllPosts: false,
            displayMyPosts: true
        };
    }

    componentDidMount() {
        fetchData()
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
    }

    filterPosts = (inputValue) => {
        const myPost = [];
        const input = inputs(inputValue);
        this.state.posts.filter(post => {
            return input.forEach(number => {
                return post.userId === number ? myPost.push(post) : null
            });
        });
        this.setState({ inputValue, myPost })
    };

    toggleDisplayAllPosts = () => {
        this.setState({ displayAllPosts: !this.state.displayAllPosts })
    }

    toggleDisplayMyPosts = () => {
        this.setState({ displayMyPosts: !this.state.displayMyPosts })
    }

    render() {
        return (
            <div className='app'>
                <Header title='JSON-Placeholder Posts' inputValue={this.state.inputValue} filterPosts={this.filterPosts} />
                <div className='app-body'>
                    <div className='all-posts'>
                        <SubTitle title='All Posts' display={this.state.displayAllPosts} toggleDisplay={this.toggleDisplayAllPosts} />
                        { 
                            this.state.displayAllPosts && this.state.posts.map(post => {
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
                        <SubTitle title='My Posts' display={this.state.displayMyPosts} toggleDisplay={this.toggleDisplayMyPosts} />
                        {
                            this.state.displayMyPosts && this.state.myPost.map(post => {
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
