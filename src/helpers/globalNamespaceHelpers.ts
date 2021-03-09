let globalNamespace = 'app';

export const setGlobalNamespace = (namespace: string): void => {
  globalNamespace = namespace;
};

export const getGlobalNamespace = ():string => globalNamespace;
