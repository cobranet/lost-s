import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import GCard from './GCard';
import Discards  from './Discards';
import Played  from './Played';
import OnMove from './OnMove';
const styles= theme => ({
    paper: {
      padding: 10,
	margin: 10,
        flexGrow: 1,
	minHeight: 400,
	minWidth: 600,
	backgroundColor: "lightGrey",
	position: "absolute",	
    }

});
export default withStyles(styles)(class Hand extends Component {

    render(){
	const x0 = 30;
	const y0 = 100;
	const xstep = 30;
	const size = 30;
	const {classes,game,onCardClick,onDiscard} = this.props;
        let ele =null;
	
	if ( game.valid ) {
	    ele = 
		<Paper   className={classes.paper} >
		<OnMove onMove={game.onMove}
	                playerA={game.playerA}
	                playerB={game.playerB}
  		/>
	               {game.decks.hands[0].map( (card,index)=>   
					  <GCard  key={card.id}
                     				  id ={card.id}
						  index={index} 
					          x={x0+xstep*index} y={y0}
					          size={size}
					          selected= { game.selected === index }
					          color={card.color}
					          value={card.value}
					          onCardClick={onCardClick}/> )}
		<Discards discards={this.props.game.decks.discards} onDiscardClick={this.props.onDiscard} />
		<Played   played={ game.decks.played } onPlay={this.props.onPlay} />
	    </Paper>
	}
	else { ele = <div>Loading</div> }
    
	      
	return ( ele );
    }
});
