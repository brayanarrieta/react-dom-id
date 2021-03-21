import { DEFAULT_GLOBAL_NAMESPACE } from '../constants';
import { setGlobalNamespace, getGlobalNamespace, generateId } from '.';

describe('helpers', () => {
  describe('when is called getGlobalNamespace', () => {
    it('should return the global namespace', () => {
      const namespace = getGlobalNamespace();
      expect(namespace).toBe(DEFAULT_GLOBAL_NAMESPACE);
    });
  });

  describe('when is called setGlobalNamespace', () => {
    it('should return the new value set when we call getGlobalNamespace', () => {
      setGlobalNamespace('select');
      const namespace = getGlobalNamespace();
      expect(namespace).toBe('select');
    });
  });

  describe('when is called generateId', () => {
    it('should return an truthy value', () => {
      const id = generateId();
      expect(id).toBeTruthy();
    });
  });
});
