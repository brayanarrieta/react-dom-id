import { DEFAULT_GLOBAL_NAMESPACE, DEFAULT_ID_SEPARATOR, DEFAULT_INITIAL_ID_NAMESPACE_COUNTER } from '../constants';
import { Namespace } from '../types';

let globalNamespace: string = DEFAULT_GLOBAL_NAMESPACE;
const idNamespaceCounters : {[key: string]: number} = {};

export const setGlobalNamespace = (namespace: Namespace): void => {
  if (namespace) {
    globalNamespace = namespace;
  }
};

export const getGlobalNamespace = (): string => globalNamespace;

export const getNextIdNamespaceCounter = (namespace: string) => {
  if (!idNamespaceCounters[namespace]) {
    idNamespaceCounters[namespace] = DEFAULT_INITIAL_ID_NAMESPACE_COUNTER;
  }
  idNamespaceCounters[namespace] += 1;
  return idNamespaceCounters[namespace];
};

export const generateId = (namespace?: Namespace): string => {
  const namespaceContext = namespace || getGlobalNamespace();
  const idNamespaceCounter = getNextIdNamespaceCounter(namespaceContext);

  return `${namespaceContext}${DEFAULT_ID_SEPARATOR}${idNamespaceCounter}`;
};

export const clearIdNamespaceCounter = (namespace: string, counter: number) => {
  if (idNamespaceCounters[namespace] === counter) {
    idNamespaceCounters[namespace] -= 1;
  }
};
