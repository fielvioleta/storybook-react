import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputGroup from './InputGroup';

describe('<InputGroup />', () => {
  test('it should mount', () => {
    render(<InputGroup />);
    
    const inputGroup = screen.getByTestId('InputGroup');

    expect(inputGroup).toBeInTheDocument();
  });
});