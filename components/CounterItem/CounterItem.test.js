import { render, screen, fireEvent } from '@testing-library/react';
import CounterItem from './CounterItem';

test('renders counter value', () => {
 const value = 0
 render(<CounterItem value={value} id={0} onIncrement={() => { }} onDecrement={() => { }} />);
 const valueElement = screen.getByText(value);
 expect(valueElement).toBeInTheDocument();
});

test('renders counter buttons', () => {
 render(<CounterItem value={0} id={0} onIncrement={() => { }} onDecrement={() => { }} />);
 const substractElement = screen.getByText(/-/i);
 expect(substractElement).toBeInTheDocument();
 const addElement = screen.getByText(/\+/i);
 expect(addElement).toBeInTheDocument();
});

test('renders counter buttons', () => {
 const value = 0
 const mockCallback1 = jest.fn();
 const mockCallback2 = jest.fn();
 render(<CounterItem value={value} id={0} onIncrement={mockCallback1} onDecrement={mockCallback2} />);
 const substractElement = screen.getByText(/-/i);
 const addElement = screen.getByText(/\+/i);
 fireEvent.click(substractElement);
 fireEvent.click(addElement);
 expect(mockCallback1).toBeCalledTimes(1);
 expect(mockCallback2).toBeCalledTimes(1);
});