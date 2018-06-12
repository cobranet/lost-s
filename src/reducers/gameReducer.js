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
  
    case "DISCARD_DRAWED": {
	const card = action.payload;
	const newDiscard = state.decks.discards[card.color]
	      .filter( (c)=>card.id !== c.id  ) ;
	console.log(newDiscard);
	const newDiscards = state.decks.discards.map ( (discards,index)=> index === card.color ? newDiscard : discards);
	console.log(newDiscards);
	const newHand = [ ...state.decks.hands[0],card]
	const newHands = [ newHand,[]];
	const newDecks = Object.assign({},state.decks,
				       {hands: newHands,
					dicards: newDiscards});	
	const newState = Object.assign({},state,
				       {decks: newDecks},
				       {selected: null,
					mode:"PLAY",
					onMove: 1
				        },
				      );
	return newState;
    }
    case "CHALLENGE_ACCEPTED": {
	const game = action.payload;
	return Object.assign({},game,{valid:true});
    }
    case "OPP_PLAY" : {
	const card  = action.payload.card;
	const newPlayed =  [...state.decks.played[1][card.color],card];
	const newPlayeds = state.decks.played[1].map ((played,index)=> index === card.color ? newPlayed : played);
	const newDecks = Object.assign({},state.decks,{played: [  [...state.decks.played[0]],newPlayeds ]});
	const newState = Object.assign( {},state,
					{decks: newDecks},
					{selected: null},
				        {scoreA: action.payload.scoreA,
					 scoreB: action.payload.scoreB} );
	return newState;
	
    }
    case "OPP_DRAWDECK": {
	let newMode = "PLAY"
	if ( state.toEnd === 1) {
	    newMode="END"
	} 
	return Object.assign({},state,{onMove: 0,mode: newMode ,toEnd: state.toEnd-1});
    }
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
    case "CARD_DRAWN": {

	const card = action.payload;
	const newHand = [...state.decks.hands[0],card]
	const newHands = [ newHand,[]]
	const newDecks = Object.assign({},state.decks,{hands:newHands})
	let newMode = "PLAY"
	if ( state.toEnd === 1) {
	    newMode="END"
	} 
	const newState = Object.assign({},state, {decks: newDecks},{onMove: 1,mode: newMode,toEnd: state.toEnd-1});
	return newState;
    }
	
 
    case "CARD_PLAYED": {
	console.log(action.payload);
	const card = action.payload.card;
	const newHand = state.decks.hands[0].filter( (c)=> card.id !== c.id ); 
	const newHands = [ newHand,[]];
	const newPlayed =  [...state.decks.played[0][card.color],card];
	const newPlayeds = state.decks.played[0].map ((played,index)=> index === card.color ? newPlayed : played);
	const newDecks = Object.assign({},state.decks,{hands: newHands,played: [ newPlayeds, [...state.decks.played[1]] ]});
	const newState = Object.assign({},state,
				       {decks: newDecks},
				       {selected: null,
					mode:"DRAW",
					scoreA: action.payload.scoreA,
					scoreB: action.payload.scoreB
				        },
				        );
	return newState;
    }
    case "CARD_DISCARTED": {
	const card = state.decks.hands[0][action.payload]
	const newHand = state.decks.hands[0].filter( (c)=> card.id !== c.id ); 
	const newHands = [ newHand,[]];
	const newDiscard = [...state.decks.discards[card.color],card];
	const newDiscards = state.decks.discards.map ( (discards,index)=> index === card.color ? newDiscard : discards);    
	const newDecks = Object.assign({},state.decks,{hands: newHands,discards: newDiscards});
	const newState = Object.assign({},state, {decks: newDecks},{selected: null,mode:"DRAW",});
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
