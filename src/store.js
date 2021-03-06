import {combineReducers,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import handReducer  from './reducers/handReducer';
import userReducer from './reducers/userReducer';
import scoreReducer from './reducers/scoreReducer';
import himReducer from './reducers/himReducer';
import fetchReducer from './reducers/fetchReducer';
import errorReducer from './reducers/errorReducer';
import websocketReducer from './reducers/websocketReducer';
import freePlayers from './reducers/freePlayers';
import challengeReducer from './reducers/challengeReducer';
import mychallengesReducer from './reducers/mychallengesReducer';
import gameReducer from './reducers/gameReducer';




const reducers = combineReducers({
    fetch: fetchReducer,
    user: userReducer,
    hand: handReducer,
    score: scoreReducer,
    him: himReducer,
    error: errorReducer,
    websocket: websocketReducer,
    freeplayers: freePlayers,
    challenge: challengeReducer,
    mychallenges: mychallengesReducer,
    game: gameReducer,
})




const middleware = applyMiddleware(thunk,logger);

const initialState = {fetch:false}

const store = createStore(reducers,initialState,middleware)

export default store;
