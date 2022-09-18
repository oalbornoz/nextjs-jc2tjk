import { render, screen } from '@testing-library/react';
import AddButton from './AddButton';

test('renders add button', () => {
 render(<AddButton />);
 const linkElement = screen.getByText(/add/i);
 expect(linkElement).toBeInTheDocument();
});
