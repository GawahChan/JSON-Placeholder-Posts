import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Post from '../components/Post';

describe('Posts', () => {
    const postTree = renderer.create(<Post />).toJSON();
    const post = shallow(<Post />);

    it('renders correctly', () => {
        expect(postTree).toMatchSnapshot();
    });

    it('initialises state `showPosts` with false', () => {
        expect(post.state().showPost).toBe(false);
    });
})