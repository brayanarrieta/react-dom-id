import idGenerator from './idGenerator';

jest.mock('./helpers/idHelpers.ts', () => (jest.fn().mockReturnValue('123456')));

describe('idGenerator', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when is called with the default behavior', () => {
    it('should return an dom id', () => {
      const id = idGenerator();
      expect(id).toBe('app-123456');
    });
  });

  describe('when is called with the namespace as arguments', () => {
    it('should return an dom id that contains the new namespace', () => {
      const id = idGenerator('input');
      expect(id).toBe('input-123456');
    });
  });
});
