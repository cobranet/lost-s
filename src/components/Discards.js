import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import GCard from './GCard';
const styles= theme => ({
    dicards: {
    },
    played: {
    }

});

const colors = [ 0,1,2,3,4 ];
export default withStyles(styles)(class Discards extends Component {

    render(){
	const { classes,discards,onDiscardClick } = this.props;
	return (
	    <div>
	    <div className={classes.discards}>
	      { colors.map( (color,index)=>
			    discards[index].length === 0 ?  	    
		      <GCard  key={color}
                     		  id ={color}
				  x={600} y={10+80*index}
				  size={50}
				  color={color}
				  value={-2}
				  onCardClick={ ()=> onDiscardClick(color) }/> :
		      <GCard      key={color}
                     		  id ={discards[index][discards[index].length-1].id}
				  x={600} y={10+80*index}
				  size={50}
				  color={discards[index][discards[index].length-1].color}
				  value={discards[index][discards[index].length-1].value}
				  onCardClick={ ()=> onDiscardClick(color) }/> 
			    
			  )}
	    </div>
	    </div>
	);
    }
});
