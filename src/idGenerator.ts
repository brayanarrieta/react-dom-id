import { generateId } from './helpers';

const idGenerator = (namespace?: string): string => generateId(namespace);
export default idGenerator;
