const errorReducer=(state={},action)=>{
    switch(action.type){
    case "ERROR" : {
	state=action.payload;
	break;
    }
    default:
	state = null;
    }
    return state;
}

export default errorReducer;
