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






const reducers = combineReducers({
    fetch: fetchReducer,
    user: userReducer,
    hand: handReducer,
    score: scoreReducer,
    him: himReducer,
    error: errorReducer,
    websocket: websocketReducer
})




const middleware = applyMiddleware(logger,thunk);

const initialState = {fetch:false}

const store = createStore(reducers,initialState,middleware)

// store.subscribe( ()=> {
//     console.log(store.getState());
// })

// store.dispatch((dispatch)=>{    
//     dispatch({type:"START_LOGIN"});

//     fetch("http://localhost:8080/api/player",
// 	  { method: "POST",
// 	    headers: headers,
// 	    body: JSON.stringify({uid: "199734644140144",image: "./images/users/maka.jpg", name:"Marija Petrovic"})})
// 	.then((response)=> response.json())
// 	.then((data)=> dispatch({type:"LOGGED",payload:data}))
// 	.catch((error)=> dispatch({type:"ERROR",payload:error}));
// });


export default store;
