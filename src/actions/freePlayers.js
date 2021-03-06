import * as conf from '../conf';

export function fetchFreePlayers(){
    return function (dispatch){
	fetch(conf.url + "/waitingplayers",
	      {headers: conf.headers})
	    .then((data)=> {return data.json();})
	    .then((response)=> { dispatch({type:"NEW_PLAYERS",payload:response });})
	    .catch((error)=>dispatch({type:"ERROR",payload:error}));
    };
};
