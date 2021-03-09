import generateId from './helpers/idHelpers';
import { getGlobalNamespace } from './helpers/globalNamespaceHelpers';

const idGenerator = (namespace = 'app'): string => {
  const namespaceContext = namespace || getGlobalNamespace();
  const id = generateId();
  return `${namespaceContext}-${id}`;
};
export default idGenerator;
