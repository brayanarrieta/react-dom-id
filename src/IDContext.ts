import React from 'react';
import idGenerator from './helpers/idGenerator';
import { getGlobalNamespace } from './setGlobalNamespace';

const ids: String[] = [];

export default React.createContext({
  generateID(namespace:string) {
    const namespaceContext = namespace ?? getGlobalNamespace();
    const id = idGenerator();
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
