import React from 'react';
import IDContext from './IDContext';

const useComponentIdGenerator = (namespace = 'app') => {
  const [id, setID] = React.useState<string | null>(null);
  const { generateID, clearID } = React.useContext(IDContext);

  React.useEffect(() => {
    const newID = generateID(namespace);
    setID(newID);
    return () => clearID(newID);
  }, [namespace, generateID, clearID]);

  return id;
};

export default useComponentIdGenerator;
