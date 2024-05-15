import { tocreateReducer } from './tocreate.js';
import { todosReducer } from './todos.js';
import { formapReducer } from './formap.js';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todosReducer,
    tocreate: tocreateReducer,
    formap: formapReducer
})

export default rootReducer;
