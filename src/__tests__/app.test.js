import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';
import fetchData from '../helpers/fetchData';


describe('App', () => {
    const appTree = renderer.create(<App />).toJSON();
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(appTree).toMatchSnapshot();
    });

    it('initialises state `posts` with an empty array', () => {
        expect(app.state().posts).toEqual([]);
    });

    it('initialises state `myPost` with an empty array', () => {
        expect(app.state().myPost).toEqual([]);
    });

    it('initialises state `inputValue` with an empty string', () => {
        expect(app.state().inputValue).toEqual('');
    });

    describe('componentDidMount', () => {
        const spy = jest.spyOn(App.prototype, 'componentDidMount');

        beforeEach(() => {
            shallow(<App />)
        })
        afterEach(() => {
            app.setState({ posts: [] });
        })

        it('calls componentDidMount', () => {
            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('updates state `posts` with data and checks if it re-renders correctly', () => {
            return fetchData()
                .then(res => {
                    expect(res).toBeDefined();
                    expect(res.status).toEqual(200);
                    return res.json()
                })
                .then(posts => {
                    app.setState({ posts })
                    expect(app.state().posts).toEqual(posts);
                    expect(app.find('Post').exists()).toBe(true);
                });
        });
    });

    // describe('filterPosts()', () => {

    //     it('checks if function is defined', () => {
    //         expect(app.instance().filterPosts).toBeDefined();
    //     });

    //     it('test,', () => {
    //         app.instance().filterPosts
    //     })
    // });

    describe('render', () => {
        it('render `Header` component', () => {
            expect(app.find('Header').exists()).toBe(true);
        });

        it('renders `.all-posts` section', () => {
            expect(app.find('.all-posts').children().length).toBeGreaterThanOrEqual(1);
        });

        it('renders `.my-posts` section', () => {
            expect(app.find('.my-posts').children().length).toBeGreaterThanOrEqual(1);
        });
    });
});