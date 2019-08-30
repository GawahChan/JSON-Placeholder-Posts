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

    it('initialises state `showPostBody` with false', () => {
        expect(post.state('showPostBody')).toBe(false);
    });

    describe('toggle display for posts', () => {
        beforeEach(() => {
            post.find('.btn-showPostBody').simulate('click');
        });
        afterEach(() => {
            post.setState({showPostBody: false});
        });
        it('sets state `showPostBody` to true from clicking button once', () => {
            expect(post.state('showPostBody')).toBe(true);
        });
        it('sets state `showPostBody` to true from clicking button twice', () => {
            expect(post.state('showPostBody')).toBe(true);
            post.find('.btn-showPostBody').simulate('click');
            expect(post.state('showPostBody')).toBe(false);
        });
        it('checks if posts in <div className=`post-body` /> is rendered', () => {
            expect(post.find('.post-body').exists()).toBe(true);
            post.find('.btn-showPostBody').simulate('click');
            expect(post.find('.post-body').exists()).toBe(false);
        });
    });
})