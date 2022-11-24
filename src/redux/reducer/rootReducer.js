import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';
import StartNowAction from './startnowAction';
const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    quizques: StartNowAction
});

export default rootReducer;