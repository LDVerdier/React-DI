import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ServiceContainer, ServiceContainerContext } from '.';

const testContainer: ServiceContainer = {
    fetchData: async(url: string) => 'not real API call'
} 

test('renders learn react link', () => {
  render(<ServiceContainerContext.Provider value={testContainer}><App /></ServiceContainerContext.Provider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
