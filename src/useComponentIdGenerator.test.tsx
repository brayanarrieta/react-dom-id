import React from 'react';
import { render } from '@testing-library/react';
import useComponentIdGenerator from './useComponentIdGenerator';

const setup = (namespace?: string) => {
  let id;
  const TestComponent = () => {
    id = useComponentIdGenerator(namespace);
    return null;
  };
  render(<TestComponent />);
  return id;
};

describe('useComponentIdGenerator', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when is called with the default behavior', () => {
    it('should return an dom id', () => {
      const id = setup();
      expect(id).toBe('app-1');
    });
  });

  describe('when is called with the namespace as arguments', () => {
    it('should return an dom id that contains the new namespace', () => {
      const id = setup('input');
      expect(id).toBe('input-1');
    });
  });
});
