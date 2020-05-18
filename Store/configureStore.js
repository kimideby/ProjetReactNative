
// Store/configureStore.js

import { createStore } from 'redux';
import monReducer from './Reducers/monReducer'

export default createStore(monReducer)