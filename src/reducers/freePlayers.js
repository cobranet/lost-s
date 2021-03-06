const freePlayers = (state =[],action)=>{
    
    switch (action.type){
    case "NEW_PLAYER":
	const newplayer = action.payload;
	state = [...state].filter( (player) => {return player.uid !== newplayer.uid} );
	state = [...state  , newplayer];
	break;
    case "NEW_PLAYERS": {
	state =  action.payload;
	break;
    }
    default:
	return state;
    }
    return state;
}

export default freePlayers;
