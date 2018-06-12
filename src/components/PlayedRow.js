import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import GCard from './GCard';
const styles= theme => ({
    dicards: {
    },
    played: {
    }

});

export default withStyles(styles)(class PlayedRow extends Component {

    render(){
	const { classes,played,onPlay,color,xpos,smer} = this.props;

	return (
	    <div className={classes.played}>
	      { played.map( (card,index)=> 
		      <GCard  key={card.id}
                     		  id ={card.id}
				  x={xpos+30*smer*index} y={10+80*color}
				  size={50}
			          color={color}
			          value={card.value}
			          placeholder={0}
				  onCardClick={ ()=> onPlay(color) }/> 
			    
			  )}

	    </div>
	);
    }
});
