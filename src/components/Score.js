import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
const styles = theme => ({
    white: {
	color: 'white'
    },
    blue: {
	color: 'blue'
    },
    green: {
	color: 'green'
    },
    yellow: {
	color: 'yellow'
    },
    red: {
	color: 'red'
    },
    score: {
	padding: 10,
	margin: 10
    }
});


const colors = ['yellow','black','green','blue','red'];
export default withStyles(styles)(class Score extends Component {
    render(){
	const {classes} = this.props;
	const {score,result} = this.props;
        return ( <Paper className={classes.score}>
		 <div>
		   { score.map( (s,index) => <span key={"a"+index}  style={{color: colors[index]}}   > {s >=0 ? "+": null }  {s}</span>  )}
		   <span key="res" > ={result >=0 ? "+": null }{result}</span>
		 </div>
		 </Paper>
	       );
	
	
    }
});
