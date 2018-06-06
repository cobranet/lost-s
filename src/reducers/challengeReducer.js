const challengeReducer=(state={},action)=>{
    switch(action.type){
    case "CHALLENGE_REFUSED": {
	return {};
    }
    case "CHALLENGE": {
	if ( action.payload.main ) {
	    return  action.payload ;
	} else {
	    return {};
	}
	    
    }
    default:
	return state;
    }
}

export default challengeReducer;
