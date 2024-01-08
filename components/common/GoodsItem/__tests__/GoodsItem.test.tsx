import React from 'react';
import renderer, { act } from 'react-test-renderer';
import GoodsItem from '../GoodsItem';
import { fireEvent, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';

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
        const { getByText } = render(
            <GoodsItem item={testItem} />,
        );
        const listName = getByText("test value");
        expect(listName).toBeTruthy();
    });
    it('ItemBlock fire close btn and delete open modal', async () => {
        const element = render(
            <GoodsItem item={testItem} />
        );
        const { getByLabelText, getByText } = element;
        await act(async () => {
            fireEvent.press(getByLabelText("close-button"));
        });
        const deleteBtn = getByText('Delete')
        expect(deleteBtn).toBeTruthy();
    });

    it('ItemBlock fire edit btn and open edit modal', async () => {
        const element = render(
            <GoodsItem item={testItem} />
        );
        const { getByLabelText, getByText } = element;

        await act(async () => {
            fireEvent.press(getByLabelText("edit-button"));
        });

        const changeLable = getByText('Change this item :')
        expect(changeLable).toBeTruthy();
    });
    it('ItemBlock fire edit btn and open edit modal and edit modal contain right value', async () => {
        const element = render(
            <GoodsItem item={testItem} />
        );
        const { getByLabelText, getByText } = element;

        await act(async () => {
            fireEvent.press(getByLabelText("edit-button"));
        });

        const changeLable = getByLabelText('change-input');

        expect(changeLable.props.value).toBe("test value");
    });
});
