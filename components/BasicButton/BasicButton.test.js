import { render, screen, fireEvent } from '@testing-library/react';
import BasicButton from './BasicButton';

test('renders add button', () => {
 const mockCallback = jest.fn();
 render(<BasicButton onClick={mockCallback} >add</BasicButton>);
 const linkElement = screen.getByText(/add/i);
 expect(linkElement).toBeInTheDocument();
});

test('calls callback function', () => {
 const mockCallback = jest.fn();
 render(<BasicButton onClick={mockCallback} >add</BasicButton>);
 const linkElement = screen.getByText(/add/i);
 fireEvent.click(linkElement);
 expect(mockCallback).toBeCalledTimes(1);
});