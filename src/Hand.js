import React,{Component} from 'react';
import { withStyles} from '@material-ui/core/styles';


const startX = 30;
const startY = 60;

export default withStyles(styles)(class Hand extends Component {
    render(){
	const {mycards} = props;
	{
	    mycards.map( (card,i)=>{
		    return <GCard x={startX+i*30}
		           y={startY}
		           color= {card.color}
                      	   value= {card.value}
		    />;
	    });
	}
    }
});
    
