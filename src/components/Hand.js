import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';
import GCard from './GCard';
import Discards  from './Discards';
import Played  from './Played';
import OnMove from './OnMove';
const styles= theme => ({
    paper: {
      padding: 10,
	margin: 10,
        flexGrow: 1,
	minHeight: 450,
	minWidth: 900,
	backgroundColor: "lightGrey",
	position: "absolute",	
    },
    toend:{
	top: 30,
	left: 100,
	position: "relative",
	color: "blue",
	maxWidth: 100
	
    }
    

});
export default withStyles(styles)(class Hand extends Component {

    render(){
	const x0 = 30;
	const y0 = 140;
	const ystep = 30;
	const size = 50;
	const {classes,game,onCardClick,onDiscard,onDraw} = this.props;
        let ele =null;
	
	if ( game.valid ) {
	    ele = 
		<Paper   className={classes.paper} >
		<OnMove onMove={game.onMove}
	                playerA={game.playerA}
	                playerB={game.playerB}
	                scoreA = {game.scoreA}
	                scoreB = {game.scoreB} 
  		/>
	               {game.decks.hands[0].map( (card,index)=>   
					  <GCard  key={card.id}
                     				  id ={card.id}
						  index={index} 
					          x={x0} y={y0+ystep*index} 
					          size={size}
					          selected= { game.selected === index }
					          color={card.color}
					          value={card.value}
					          onCardClick={onCardClick}/> )}
		<Discards discards={this.props.game.decks.discards} onDiscardClick={onDiscard} />
		<Played   played={ game.decks.played } onPlay={this.props.onPlay} />

	        <GCard  key={100}
                        id ={100}
	                index={100} 
	                x={150} y={300} 
	                size={size}
	                selected= { false}
	                color={5}
	                value={-2}
	    onCardClick={()=> onDraw() }/>
		<Paper className={classes.toend}>
            <Typography variant="display1">{game.toEnd}</Typography>
		
	    { game.onMove===0 ? <Typography  variant="display1">{game.mode}</Typography>: <div></div>  }
	    </Paper>
	    </Paper>;
	}
	else { ele = <div>Loading</div> }
    
	      
	return ( ele );
    }
});
