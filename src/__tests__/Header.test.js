import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header', () => {
    const HeaderTree = renderer.create(<Header />).toJSON();

    it('renders correctly', () => {
        expect(HeaderTree).toMatchSnapshot();
    });
})