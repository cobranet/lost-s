import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import GCard from './GCard';
import PlayedRow from './PlayedRow';
const styles= theme => ({
    dicards: {
    },
    played: {
    }

});

const colors = [ 0,1,2,3,4 ];
export default withStyles(styles)(class Played extends Component {

    render(){
	const { classes,played,onPlay } = this.props;

	return (
	    <div>
	      <div className={classes.played}>
	      { colors.map( (color,index)=> 
			    played[0][color].length  === 0 ?
		      <GCard  key={color}
                     		  id ={color}
				  x={500} y={10+80*index}
				  size={50}
			          color={color}
			          value={-2}
			          placeholder={1}
				  onCardClick={ ()=> onPlay(color) }/> :
			    <PlayedRow    key={color} color ={color}
					   played={played[0][color]}
					      onPlay={onPlay}
					      xpos={500}
					      smer={-1}/>
			  )}
	    </div>
	    <div className={classes.played}>
		{ colors.map( (color,index)=>
			      played[1][color].length  === 0 ?
		      <GCard  key={color}
                     		  id ={color}
				  x={700} y={10+80*index}
				  size={50}
			          color={color}
			          value={-2}
			          placeholder={1}
			          onCardClick={()=>{}} />  :
			      <PlayedRow key={color}
			                   color ={color}
			                   xpos={700}
			                   smer={1}
					   played={played[1][color]}
					   onPlay={onPlay}/>
			    
			  )}
	    </div>
	    </div>
	);
    }
});
