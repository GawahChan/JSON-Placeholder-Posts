import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App';
import fetchData from '../helpers/fetchData';


describe('App', () => {
    const appTree = renderer.create(<App />).toJSON();
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(appTree).toMatchSnapshot();
    });

    it('initialises state `posts` with an empty array', () => {
        expect(app.state('posts')).toEqual([]);
    });

    it('initialises state `myPost` with an empty array', () => {
        expect(app.state('myPost')).toEqual([]);
    });

    it('initialises state `inputValue` with an empty string', () => {
        expect(app.state('inputValue')).toEqual('');
    });

    it('initialises state `displayAllPosts` with boolean false', () => {
        expect(app.state('displayAllPosts')).toEqual(false);
    });

    it('initialises state `displayMyPosts` with boolean true', () => {
        expect(app.state('displayMyPosts')).toEqual(true);
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
                    expect(app.state('posts')).toEqual(posts);
                });
        });
    });

    describe("filterPosts", () => {
        const instance = app.instance();
        const mockInputValue = 1;
        const mockPost1 = {userId: 1, id: 1, title: 'Mock Title 1', body: 'Mock Body 1'};
        const mockPost2 = {userId: 3, id: 2, title: 'Mock Title 2', body: 'Mock Body 2'};

        beforeEach(() => {
            jest.spyOn(instance, 'filterPosts');
            instance.filterPosts(mockInputValue);
            app.setState({ posts: [mockPost1, mockPost2]});
        });
      
        it("calls function with given input value", () => {
          expect(instance.filterPosts).toHaveBeenCalledWith(1);
        });
      
        it("sets the inputValue state attribute to the mockInputValue", () => {
            expect(app.state("inputValue")).toEqual(1);
        });
      
        it("sets myPost to the filtered array of posts", () => {
          expect(app.state("myPost")).toEqual([mockPost1]);
        });
      });

      describe('toggleDisplayAllPosts()', () => {
            const instance = app.instance();
          beforeEach(() => {
            instance.toggleDisplayAllPosts();
          });
          afterEach(() => {
              app.setState({ displayAllPosts: false });
          });
          it('Changes state `displayAllPosts` to true after first click', () => {
              expect(app.state('displayAllPosts')).toEqual(true);
          });
          it('Changes state `displayAllPosts` to false after two clicks', () => {
            instance.toggleDisplayAllPosts();
            expect(app.state('displayAllPosts')).toEqual(false);
          });
      });

      describe('toggleDisplayMyPosts()', () => {
          const instance = app.instance();
        beforeEach(() => {
            instance.toggleDisplayMyPosts();
        });
        afterEach(() => {
            app.setState({ displayMyPosts: true });
        });
        it('Changes state `displayMyPosts` to false after first click', () => {
            expect(app.state('displayMyPosts')).toEqual(false);
        });
        it('Changes state `displayMyPosts` to true after two clicks', () => {
            instance.toggleDisplayMyPosts();
            expect(app.state('displayMyPosts')).toEqual(true);
        });
      })



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