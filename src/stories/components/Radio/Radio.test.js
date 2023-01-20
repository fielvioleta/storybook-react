import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Radio from './Radio';

describe('<Radio />', () => {
  test('it should mount', () => {
    render(<Radio />);
    
    const radio = screen.getByTestId('Radio');

    expect(radio).toBeInTheDocument();
  });
});