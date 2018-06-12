import * as conf from '../conf.js';

export function selectCard(card){
    return { type: "SELECT_CARD",payload: card };
}



export function discardCard(userid,card){
    return function(dispatch){
	fetch(conf.url + "discard/" + userid , { method: "POST", headers: conf.headers, body: JSON.stringify(card) }  )
	    .then( (data) => dispatch( {type: "CARD_DISCARTED", payload: card }));
    }
}

export function drawDiscard(userid,color){
    return function(dispatch){
	fetch(conf.url + "drawDiscard/" + userid , { method: "POST", headers: conf.headers, body: JSON.stringify(color) }  )
	    .then((response)=> response.json())
	    .then( (data) => dispatch( {type: "DISCARD_DRAWED", payload: data }));
    } 
}
export function drawCard(userid){
    return function(dispatch){
	fetch(conf.url + "draw/" + userid )
	    .then( (response)=> response.json())
	    .then( (data) => dispatch( {type: "CARD_DRAWN", payload: data }));
    }
}

export function playCard(userid,card){
    return function(dispatch){
	fetch(conf.url + "play/" + userid , { method: "POST", headers: conf.headers, body: JSON.stringify(card) }  )
	    .then((response)=> response.json())
	    .then( (data) => dispatch( {type: "CARD_PLAYED", payload: data }));
    }
}

export function getGame(userid){
    return function(dispatch){
	fetch(conf.url + "mygame/" + userid)
	    .then( (response)=> response.json())
	    .then( (data)=> dispatch({type: "GET_GAME",payload: data  }))
	    .catch( (error)=> ({type: "ERROR",payload: error}));
    }
}
		  
