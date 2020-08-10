// using example from redux tutorial: https://redux.js.org/tutorials/essentials/part-2-app-structure

import { createStore } from 'redux';
import reducer from '../utils/reducers';

const store = createStore(reducer);

export default store;