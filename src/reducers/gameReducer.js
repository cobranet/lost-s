const initialGame = {
    decks: {
	hands: [[],[]],
	discards: [[],[],[],[],[]],
	played:[[],[]],
	deck:[],
	playerA: {},
	playerB: {},
	valid : false,
	selected: null,
	mode: "PLAY"
    }
}
const gameReducer=(state=initialGame, action)=>{
    switch(action.type){
        
    case "OPP_DISCARD" : {
	const card = action.payload;
	const newDiscard = [...state.decks.discards[card.color],card];
	const newDiscards = state.decks.discards.map ( (discards,index)=> index === card.color ? newDiscard : discards);    
	const newDecks = Object.assign({},state.decks,{discards: newDiscards});
	const newState = Object.assign({},state, {decks: newDecks},{selected: null});
	return newState;
	
    }
    case "SELECT_CARD": {
	 return state.selected !== action.payload ?
	     Object.assign({},state,{selected: action.payload}) :
	     Object.assign({},state,{selected: null})
    }

    case "CARD_PLAYED": {
	const card = state.decks.hands[0][action.payload]
	const newHand = state.decks.hands[0].filter( (c)=> card.id !== c.id ); 
	const newHands = [ newHand,[]];
	const newPlayed =  [...state.decks.played[0][card.color],card];
	const newPlayeds = state.decks.played[0].map ((played,index)=> index === card.color ? newPlayed : played);
	const newDecks = Object.assign({},state.decks,{hands: newHands,played: [ newPlayeds, [...state.decks.played[1]] ]});
	const newState = Object.assign({},state, {decks: newDecks},{selected: null});
	return newState;
    }
    case "CARD_DISCARTED": {
	const card = state.decks.hands[0][action.payload]
	const newHand = state.decks.hands[0].filter( (c)=> card.id !== c.id ); 
	const newHands = [ newHand,[]];
	const newDiscard = [...state.decks.discards[card.color],card];
	const newDiscards = state.decks.discards.map ( (discards,index)=> index === card.color ? newDiscard : discards);    
	const newDecks = Object.assign({},state.decks,{hands: newHands,discards: newDiscards});
	const newState = Object.assign({},state, {decks: newDecks},{selected: null});
	return newState;
    }
    case "ACCEPT_CHALLENGE": {
	return Object.assign({},action.payload,{valid:true,selected:null}) ;
	
    }
    case "GET_GAME":{
	return Object.assign({},action.payload,{valid: true,selected:null});
    }
    default: {
	return state;
    }
    }
}

export default gameReducer;
