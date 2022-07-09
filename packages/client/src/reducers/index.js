import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import powersReducer from './powersReducer';

const rootReducer = combineReducers({
  heroesData: heroesReducer,
  powersData: powersReducer,
});

export default rootReducer;
