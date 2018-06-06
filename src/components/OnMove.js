import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import {Grid,Paper,Avatar,Typography} from '@material-ui/core';
const coef = 88/56;
const styles = theme => ({
    card : {
	borderRadius: "5px ",
	backgroundColor: "white",
	padding: 5,
    },
    score: {
	maxWidth: 200
    },
    onMove: {
	width: 50,
	height: 50
    },
    notOnMove: {

    }
    
    

});



export default withStyles(styles)(class OnMove extends Component {
    render (){
	const {classes} = this.props;
	const { playerA,playerB,onMove } = this.props;
	const me = onMove === 0 ? classes.onMove : classes.notOnMove;
	const him = onMove === 1 ? classes.onMove : classes.notOnMove;
	    
	return(
	    <Paper className={classes.card}>
	      <Grid className={classes.score} container >
		<Grid item >
		  <Grid container>
		    <Grid item >
		      <Avatar className={me}  key={2} src={playerA.image}/>
		    </Grid>
		    <Grid item >
		      <Typography variant="display1">0</Typography>
		    </Grid>
	          </Grid>
		</Grid>
		<Grid item>
		<Grid container>
		<Grid item >
		  <Avatar className={him} key={3} src={playerB.image}/>
		</Grid>
		<Grid item>
		  <Typography variant="display1">0</Typography>
		   </Grid>
		
		</Grid>
		</Grid>
               </Grid>
	    </Paper>
	);
    }
});
