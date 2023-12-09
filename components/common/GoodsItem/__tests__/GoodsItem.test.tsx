import React from 'react';
import renderer from 'react-test-renderer';
import GoodsItem from '../GoodsItem';
import { render } from '@testing-library/react-native';

const testItem = {
    key: '1', 
    value: 'test value'
};

describe('<ItemBlock />', () => {
    it('ItemBlock match snapshot', () => {
        const tree = renderer.create(<GoodsItem item={testItem} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('ItemBlock contain  right info', () => {
        const {getByText } = render(
            <GoodsItem item={testItem} />,
          );
          const listName = getByText("test value");
          expect(listName).toBeTruthy();
    });
});

