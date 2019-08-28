import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';



describe('App', () => {
    const appTree = renderer.create(<App />).toJSON();

    it('renders correctly', () => {
        expect(appTree).toMatchSnapshot();
    });
})