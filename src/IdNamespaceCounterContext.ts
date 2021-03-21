import React from 'react';
import { DEFAULT_ID_SEPARATOR } from './constants';
import { clearIdNamespaceCounter, generateId } from './helpers';
import { Namespace } from './types';

export default React.createContext({
  generateId(namespace:Namespace) {
    return generateId(namespace);
  },

  clearId(id:string) {
    const [namespace, counterAsString] = id?.split(DEFAULT_ID_SEPARATOR) || [];
    clearIdNamespaceCounter(namespace, +counterAsString);
  },
});
