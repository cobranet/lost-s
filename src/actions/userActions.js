const url = "http://localhost:8080/api/player"

const headers = {
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'application/json'
};
      
export function startLogin(){
    return {type: "START_LOGIN"};
}

export function login(user){
    
    return function(dispatch){
	fetch(url,{headers: headers, method: "POST",body: JSON.stringify(user)})
	    .then((data)=> {return data.json()})
	    .then((response)=> { dispatch(logged(response)) } )
	    .catch((error)=>dispatch({type:"ERROR",payload:error}));
    }
}

export function logged(user){
    return {
	type: "LOGGED",
	payload: user
    }
}
