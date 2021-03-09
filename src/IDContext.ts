import React from 'react';
import { getGlobalNamespace } from './setGlobalNamespace';
import generateId from './helpers/idGenerator';

const ids: String[] = [];

export default React.createContext({
  generateID(namespace:string) {
    const namespaceContext = namespace || getGlobalNamespace();
    const id = generateId();
    const generatedId = `${namespaceContext}-${id}`;
    ids.push(generatedId);
    return generatedId;
  },

  clearID(id: string) {
    const position = ids.indexOf(id);
    if (position === -1) return;
    ids.splice(position, 1);
  },
});
