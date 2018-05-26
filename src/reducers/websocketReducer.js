const websocketReducer=(state={connected: true, client: null},action)=>{
    switch(action.type){
    case "CONNECT": {
	state = { connected: true , client: action.payload }
	break;
    }
    case "DISCONNECT": {
	state = { connected: false, client: null }
	break
    }
    default:  {
	state = { connected: false, client: null }
	break
    }
    }
    return state;
}

export default websocketReducer;
