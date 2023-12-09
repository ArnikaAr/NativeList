import React from 'react';
import renderer from 'react-test-renderer';
import ItemBlock from '../ItemBlock';
import { render } from '@testing-library/react-native';

const testItem = {
    id: '1',
    listName: 'List Name',
    listDetails: 'List Details',
    items: [{
        key: '1',
        value: 'test value'
    }]
};

describe('<ItemBlock />', () => {
    it('ItemBlock match snapshot', () => {
        const tree = renderer.create(<ItemBlock item={testItem} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('ItemBlock contain  right info', () => {
        const {getByText } = render(
            <ItemBlock item={testItem} />,
          );
          const listName = getByText("List Name");
          expect(listName).toBeTruthy();
    });
});

