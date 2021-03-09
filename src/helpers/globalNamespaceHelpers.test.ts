import { getGlobalNamespace, setGlobalNamespace } from './globalNamespaceHelpers';

describe('globalNamespaceHelpers', () => {
  describe('when is called getGlobalNamespace', () => {
    it('should return the global namespace', () => {
      const namespace = getGlobalNamespace();
      expect(namespace).toBe('app');
    });
  });

  describe('when is called setGlobalNamespace', () => {
    it('should return the new value set when we call getGlobalNamespace', () => {
      setGlobalNamespace('select');
      const namespace = getGlobalNamespace();
      expect(namespace).toBe('select');
    });
  });
});
