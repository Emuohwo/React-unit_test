// ItemList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

describe('ItemList Component', () => {
    test('renders the correct number of items', () => {
        const items = ['Item 1', 'Item 2', 'Item 3'];
        
        render(<ItemList items={items} />);
        
        const listItems = screen.getAllByRole('listitem');
        
        expect(listItems.length).toBe(items.length);
        expect(listItems[0]).toHaveTextContent('Item 1');
        expect(listItems[1]).toHaveTextContent('Item 2');
        expect(listItems[2]).toHaveTextContent('Item 3');
    });
});
