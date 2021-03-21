import React from 'react';
import IdNamespaceCounterContext from './IdNamespaceCounterContext';

const useComponentIdGenerator = (namespace?: string) => {
  const [id, setId] = React.useState<string | null>(null);
  const { generateId, clearId } = React.useContext(IdNamespaceCounterContext);

  React.useEffect(() => {
    const newId = generateId(namespace);
    setId(newId);
    return () => clearId(newId);
  }, [namespace, generateId, clearId]);

  return id;
};

export default useComponentIdGenerator;
