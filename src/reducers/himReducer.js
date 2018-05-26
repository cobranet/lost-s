const himReducer=(state={},action)=>{
    if (action.type==="CHANGE_HIM")
	return action.payload;
    return state;
}

export default himReducer;
