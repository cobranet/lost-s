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

export function playCard(userid,card){
    return function(dispatch){
	fetch(conf.url + "play/" + userid , { method: "POST", headers: conf.headers, body: JSON.stringify(card) }  )
	    .then( (data) => dispatch( {type: "CARD_PLAYED", payload: card }));
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
		  
