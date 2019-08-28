import React, { Component } from 'react';
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
        // console.log(this.state.posts);
        return (
            <div>
                My App
            </div>
        );
    }
}

export default App;
