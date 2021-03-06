import * as conf from '../conf.js';



export function getChallenge(myid){
    return function(dispatch) {
	fetch(conf.url + "mychallenge/"+myid)
	    .then((response)=>{return response.json()})
	    .then( (data)=>
		   {dispatch({type: "CHALLENGE",payload:data })} )
	    .catch( (data)=> dispatch({type: "ERROR", payload: data}));	  
    }
}




export function cancelChallenge(challengeId){
    return function(dispatch) {
	fetch(conf.url + "cancelChallenge/"+challengeId )
	    .then((response)=>{return response.json()})
	    .then( (data)=>
		   {dispatch({type: "CHALLENGE",payload:{} })} )
	    .catch( (data)=> dispatch({type: "ERROR", payload: data}));	  
    }
}

export function acceptChallenge(challengeId){
    return function(dispatch) {
	fetch(conf.url + "acceptChallenge/"+challengeId )
	    .then((response)=>{return response.json()})
	    .then( (data)=>
		   {dispatch({type: "ACCEPT_CHALLENGE",payload:data   })} )
	    .catch( (data)=> dispatch({type: "ERROR", payload: data}));	  
    }
}

export function refuseChallenge(challengeId){
    return function(dispatch) {
	fetch(conf.url + "refuseChallenge/"+challengeId )
	    .then((response)=>{return response.json()})
	    .then( (data)=>
		   {dispatch({type: "REMOVE_CHALLENGE",payload:{id: challengeId} })} )
	    .catch( (data)=> dispatch({type: "ERROR", payload: data}));	  
    }
}


export function newChallenge(myid,challengeid){
    const challenge = { mainUserId: myid,
			secondUserId: challengeid}
    return function(dispatch) {
	fetch (conf.url+"newchallenge",{headers: conf.headers,method:"POST",
			 body: JSON.stringify(challenge)})
	    .then( (response) => response.json())
	    .then( (data)=> dispatch({type: "CHALLENGE",payload: data}))
	    .catch( (data)=> dispatch({type: "ERROR", payload: data}));
    }
}
