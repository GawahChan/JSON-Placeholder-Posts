import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPost: false
        }
    }
    togglePosts = () => {
        this.setState({ showPost: !this.state.showPost });
    }

    render() {
        const { userId, postTitle, postBody } = this.props;
        return (
            <div className='post'>
                <div className='post-title'>
                    <h3>{postTitle}</h3>
                    <div className={`btn-showPosts ${this.state.showPost ? 'up' : 'down'}`}
                        onClick={this.togglePosts}
                    />
                </div>
                {
                    this.state.showPost &&
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