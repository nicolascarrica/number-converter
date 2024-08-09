import { fireEvent, render, screen } from "@testing-library/react";
import Convertor from "../Convertor";


jest.mock('../../components/NumberInput', () => (props) => (
  <div>
    <label>{props.label}: </label>
    <input 
      type="text" 
      value={props.value} 
      onChange={props.onChange}
      placeholder={props.label}

      />
  </div>
));

describe('Convertor component', () => {
  test('renders correctly', () => {
    render(<Convertor />);
    expect(screen.getByText('Number Converter')).toBeInTheDocument();
    expect(screen.getByText('Decimal:')).toBeInTheDocument();
    expect(screen.getByText('Binary:')).toBeInTheDocument();
    expect(screen.getByText('Hexadecimal:')).toBeInTheDocument();
    expect(screen.getByText('IEEE754:')).toBeInTheDocument();
  })

  test('updates binary input when decimal input changes', () => {
    render(<Convertor />);
    const decimalInput = screen.getByPlaceholderText('Decimal');
    fireEvent.change(decimalInput, { target: { value: '10' } });
    
    const binaryInput = screen.getByPlaceholderText('Binary');
    expect(binaryInput.value).toBe('1010');
  });

  test('updates hexadecimal input when decimal input changes', () => {
    render(<Convertor />);
    const decimalInput = screen.getByPlaceholderText('Decimal');
    fireEvent.change(decimalInput, { target: { value: '10' } });
    
    const hexadecimalInput = screen.getByPlaceholderText('Hexadecimal');
    expect(hexadecimalInput.value).toBe('A');
  });

  test('updates decimal input when hexadecimal input changes', () => {
    render(<Convertor />);
    const hexadecimalInput = screen.getByPlaceholderText('Hexadecimal');
    fireEvent.change(hexadecimalInput, { target: { value: 'A' } });
    const decimalInput = screen.getByPlaceholderText('Decimal');
    expect(decimalInput.value).toBe('10');
  });

  test('updates ieee754 input when decimal input changes', () => {
    render(<Convertor />);
    const decimalInput = screen.getByPlaceholderText('Decimal');
    fireEvent.change(decimalInput, { target: { value: '10' } });
    const ieee754Input = screen.getByPlaceholderText('IEEE754');
    expect(ieee754Input).toHaveValue('01000001001000000000000000000000');
  });


})