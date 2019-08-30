import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPostBody: false
        }
    }
    togglePosts = () => {
        this.setState({ showPostBody: !this.state.showPostBody });
    }

    render() {
        const { userId, postTitle, postBody } = this.props;
        return (
            <div className='post'>
                <div className='post-title'>
                    <h3>{postTitle}</h3>
                    <div className={`btn-showPostBody ${this.state.showPostBody ? 'up' : 'down'}`}
                        onClick={this.togglePosts}
                    />
                </div>
                {
                    this.state.showPostBody &&
                    <div className='post-body'>
                        <p>{postBody}</p>
                        <p>Posted by user: {userId}</p>
                        <p>Reference number:  {this.props.postId}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Post;