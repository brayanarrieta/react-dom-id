import generateId from './idHelpers';

describe('idHelpers', () => {
  describe('when is called generateId', () => {
    it('should return an truthy value', () => {
      const id = generateId();
      expect(id).toBeTruthy();
    });
  });
});
