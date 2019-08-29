import React, { Component } from 'react';

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
                    <h3>{postTitle} #{this.props.postId}</h3>
                    <button className='btn-showPosts' onClick={this.togglePosts}>Show post</button>
                </div>
                {
                    this.state.showPost &&
                    <div className='post-body'>
                        <p>{postBody}</p>
                        <p>Posted by user: {userId}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Post;