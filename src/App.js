import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';



import Header from './components/Header';
import Waiting from './components/Waiting';
import ChallengeWnd from './components/ChallengeWnd';
import Hand from './components/Hand.js';


import {connect} from 'react-redux';
import SockJsClient from 'react-stomp';

import * as conf from './conf';

import * as useractions from './actions/userActions';
import * as utilactions from './actions/utilActions';
import * as freeplayersactions from './actions/freePlayers';
import * as challengeactions from './actions/challangeActions.js';
import * as mychallengesactions from './actions/mychallengesActions';
import * as gameactions from './actions/gameActions';


const  users = [ {uid: "199734644140144",image: "./images/users/maka.jpg", name:"Marija Petrovic"},
		 {uid: "117392552372115", image: "./images/users/pana.jpg",name:"Pana Petrovic"},
		 {uid: "10212423291510705",image: "./images/users/braca.jpg",name: "Bratislav Petrovic"}];

// const url = 'http://localhost:8080/api';

const styles = theme => ({
    root : {
    },
    paper: {
      padding: 10,
	margin: 10,
        flexGrow: 1,
	minHeight: 450,
	minWidth: 1000,
	backgroundColor: "lightGrey",
	position: "absolute",	
    },
    avatar: {
	margin: 10,
    },
    top: {
	textAlign: 'center'
    }
});


let App = withStyles(styles)(class App extends Component {

    componentWillMount=()=>{
	this.props.dispatch(useractions.startLogin());
	this.props.dispatch(useractions.login(users[0]));

	this.props.dispatch(mychallengesactions.getChallenges(users[0]));
	this.props.dispatch(challengeactions.getChallenge(users[0].uid));
	this.props.dispatch(freeplayersactions.fetchFreePlayers());
	this.props.dispatch(gameactions.getGame(users[0].uid));
	
    }

    getCard=(index)=>{
	return this.props.game.decks.hands[0][index];
    }
    onPlay=(color)=>{
	if (this.props.game.selected === null ) {
	    return;
	}
	const card = this.getCard(this.props.game.selected);

	if ( card.color !== color ){
	    return;
	}
	this.props.dispatch(gameactions.playCard(this.props.user.uid,this.props.game.selected));
	
    }
    onDiscardDraw=(color)=>{
	this.props.dispatch(gameactions.drawDiscard(this.props.user.uid,color));
    }
    onDiscard=(color)=>{
	if(this.props.game.onMove === 1) return;
	this.props.game.mode === "PLAY" ? this.onDiscardPlay(color): this.onDiscardDraw(color);
    }
    
    onDiscardPlay=(color)=>{
	
	if (this.props.game.selected === null ) {
	    return;
	}
	if (this.props.game.mode !== "PLAY" ) return;
	const card = this.getCard(this.props.game.selected);
	if ( card.color !== color ){
	    return;
	}
	this.props.dispatch(gameactions.discardCard(this.props.user.uid,this.props.game.selected));

    }
    onDraw=()=>{
	if ( this.props.game.onMove === 1 ) return;
	if (this.props.game.mode !== "DRAW" ) return;
	this.props.dispatch(gameactions.drawCard(this.props.user.uid));
    }
    onCardClick=(card)=>{
	if ( this.props.game.onMove === 1 ) return;
	if (this.props.game.mode !== "PLAY" ) return;
	this.props.dispatch(gameactions.selectCard(card));
    }
    acceptChallenge=(challengeId)=>{
	this.props.dispatch(challengeactions.acceptChallenge(challengeId));
    }
    refuseChallenge=(challengeId)=>{
	this.props.dispatch(challengeactions.refuseChallenge(challengeId));
    }
    cancelChallenge=(challengeId)=>{
	this.props.dispatch(challengeactions.cancelChallenge(challengeId));
    }
    connect=()=>{
	this.props.dispatch(utilactions.connect(this.clientRef));
    }
    newChallenge=(userid)=>{
	this.props.dispatch(challengeactions.newChallenge(this.props.user.uid,userid) );
    }
    disconnect=()=>{
	this.props.dispatch(utilactions.disconnect(null));
	this.props.dispatch(utilactions.error("WEBSOCKET disconnect"));
    }
    changeUser=(e)=>{
	const user = users.filter((user)=>{ return user.uid === e.target.value; })[0];
	this.props.dispatch(useractions.login(user));
	this.props.dispatch(mychallengesactions.getChallenges(user));
	this.props.dispatch(challengeactions.getChallenge(user.uid));
	this.props.dispatch(freeplayersactions.fetchFreePlayers());
	this.props.dispatch(gameactions.getGame(user.uid));
    }

     onMessage=(msg)=>{
         console.log("MESSAGE",msg);
	 this.props.dispatch({type: msg.type, payload: JSON.parse(msg.payload)});
    }

    
    render() {
	let ele = null;
    	const {user,freeplayers,mychallenges} = this.props;
	console.log('STATUS',user.status);
	switch(user.status) {
	    
	case "WAITING" :
	    ele =  <Waiting freeplayers={freeplayers}
	                    user={user}
	                    newChallenge = {this.newChallenge} 	
	                    acceptChallenge = {this.acceptChallenge}
	                    mychallenges = {mychallenges}
	                    refuseChallenge = {this.refuseChallenge}>
	    
	    
		        Game
	           </Waiting>;
	    break;
	case "CHALLENGE":
	    ele =  <ChallengeWnd cancelChallenge={this.cancelChallenge}
	                        challenge = {this.props.challenge} 
		/>;
	    break;
	case "GAME":
	    ele = <Hand game={this.props.game}
	                onCardClick={this.onCardClick}
                        onDiscard = {this.onDiscard}
	                onPlay= {this.onPlay}
	                onDraw= {this.onDraw}
		/>;
	    break;
        default:
	    ele = <div>Bad status</div>;

  	}
	return (
	    <div>
	      { user.reconnect ?
		  
    		  <div>
    			<SockJsClient url={conf.url}
    			    topics={['/topic/' + user.uid , '/topic/loby' ] }
    			    onMessage={(msg) => { this.onMessage(msg) }}
    		    onConnect={()=> { this.connect();} }
    		    onDisconnect={ ()=>{ this.disconnect();}}
    		    ref={ (client) => { this.clientRef = client }}
 
    			  /> </div> : null }
	      <Header changeUser={this.changeUser}
		      user={user}
		      onMessage={this.onMessage}
		      connect ={this.connect}
		      clientRef={this.clientRef}
		      disconnect = {this.disconnect}
		      SocketJsClient={this.clientRef} />

	    {ele}
	    </div>
	);
    }
});


    
			

App = connect((store)=>{
    return { freeplayers: store.freeplayers,
	     user: store.user,
	     game: store.game,
	     challenge: store.challenge,
	     mychallenges: store.mychallenges,
	     error: store.error };
})(App);

export default App;
