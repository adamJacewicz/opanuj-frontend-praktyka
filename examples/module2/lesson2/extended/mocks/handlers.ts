import { watchHandlers } from './handlers/watch';
import { searchHandlers } from './handlers/search.ts';

export default [...watchHandlers, ...searchHandlers];
