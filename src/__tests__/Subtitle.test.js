import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import SubTitle from '../components/SubTitle';

describe('SubTitle', () => {
    const subTitleTree = renderer.create(<SubTitle />).toJSON();
    const subTitle = shallow(<SubTitle />);

    it('renders correctly', () => {
        expect(subTitleTree).toMatchSnapshot();
    });

    it('checks if <div className=subTitle /> exists', () => {
        expect(subTitle.find('.subTitle').exists()).toBe(true);
    });
});