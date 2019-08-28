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

        it('updates state `posts` with data', () => {
            return fetchData()
                .then(res => {
                    expect(res).toBeDefined();
                    expect(res.status).toEqual(200);
                    return res.json()
                })
                .then(posts => {
                    app.setState({ posts })
                    expect(app.state().posts).toEqual(posts);
                });
        });
    });
});