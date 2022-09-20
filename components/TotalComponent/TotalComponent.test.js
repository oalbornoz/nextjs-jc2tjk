import { render, screen } from '@testing-library/react';
import TotalComponent from './TotalComponent';


jest.mock('../TotalComponent/lib/getDataSummary', () => ({
 getDataSummary: () => 123,
}));

test('renders add button', () => {
 render(<TotalComponent data={[]} />);
 const valueElement = screen.getByText(/total: 123/i)
 expect(valueElement).toBeInTheDocument()
});