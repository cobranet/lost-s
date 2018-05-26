const defaultHand = {
    mycards: [],
    selected: null
}
const handReducer=(state=defaultHand ,action)=>{
    
    if (action.type==="SELECT"){
	return Object.assign({},state,{selected: action.payload});
    }
    if (action.type==="DESELECT"){
	return Object.assign({},state,{selected: null});
    }
    if (action.type==="ADD_CARD"){
	state={...state}
	state.mycards = [...state.mycards,action.payload]
    }
    return state;
}

      
export default handReducer;
