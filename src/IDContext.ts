import React from 'react';
import idGenerator from './idGenerator';

const ids: String[] = [];

export default React.createContext({
  generateID(namespace:string) {
    const generatedId = idGenerator(namespace);
    ids.push(generatedId);
    return generatedId;
  },

  clearID(id: string) {
    const position = ids.indexOf(id);
    if (position === -1) return;
    ids.splice(position, 1);
  },
});
