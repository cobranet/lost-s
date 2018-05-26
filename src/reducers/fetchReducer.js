const fetchReducer=(state=false,action)=>{
    switch(action.type){
    case "START_LOGIN": {

	state = true;
	break;
    }
    case "LOGGED":  {
	state = false;
	break;
    }
    case "ERROR": {
        state = false;
	break;    
    }
    default:{
	state=false;
    }
    }
    return state;
    
}

export default fetchReducer;
