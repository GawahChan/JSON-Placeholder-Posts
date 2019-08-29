import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header', () => {
    const mockInput = jest.fn();
    const mockInputChange = 3;
    const headerTitle = 'Posts Page'
    const props = { title: headerTitle, filterPosts: mockInput }

    const headerTree = renderer.create(<Header {...props} />).toJSON();
    const header = shallow(<Header {...props} />);

    it('renders correctly', () => {
        expect(headerTree).toMatchSnapshot();
    });

    it('calls `filterPosts` callback', () => {
        header.find('.input-filterPosts').simulate('change', {target: { value: mockInputChange }});

        expect(mockInput).toHaveBeenCalledWith(mockInputChange);
    })
})