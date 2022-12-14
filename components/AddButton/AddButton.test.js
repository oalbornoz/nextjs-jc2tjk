import { render, screen, fireEvent } from '@testing-library/react';
import AddButton from './AddButton';

test('renders add button', () => {
 const mockCallback = jest.fn();
 render(<AddButton onAdd={mockCallback} />);
 const linkElement = screen.getByText(/add/i);
 expect(linkElement).toBeInTheDocument();
});

test('calls callback function', () => {
 const mockCallback = jest.fn();
 render(<AddButton onAdd={mockCallback} />);
 const linkElement = screen.getByText(/add/i);
 fireEvent.click(linkElement);
 expect(mockCallback).toBeCalledTimes(1);
});