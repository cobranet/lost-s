const userReducer=(state={reconnect:false},action)=>{
    switch (action.type){
    case "LOGGED": {
	return Object.assign( {},action.payload,{reconnect: true});
    }
    case "ACCEPT_CHALLENGE": {
	return Object.assign( {},state,{status: "GAME" })
    }
    case "CHALLENGE_REFUSED": {
	return Object.assign( {},state,{status: "WAITING" })
    }
    case "CHALLENGE_ACCEPTED": {
	return Object.assign( {},state,{status: "GAME" })
    }
	
    case "CHALLENGE":
	if ( action.payload.main) {
	    return Object.assign( {},state,{status: "CHALLENGE" })
	}
        else {
	    return state.status === "CHALLENGE" ?
		Object.assign( {},state,{status: "WAITING" }):
	        state;
	}
		
    default:
	return state;
    }	
}

export default userReducer;
