import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper,
	Avatar,
	Grid,
	Button} from '@material-ui/core';


const styles = theme => (
    {
	root: {
	    width: '100%',
	    maxWidth: 360,
	    backgroundColor: theme.palette.background.paper,
	    border: "1px solid black",
	},
	grid: {
	    padding: 10
	},
	button: {
	     margin: theme.spacing.unit,
	 },
    }
);


export default withStyles(styles)(class Challenge extends Component {
    render(){
	const {classes,challenge,cancelChallenge} = this.props;
	 
	return (   <Paper>
		   { challenge.opponent ?
		     <Grid container className={classes.grid} >
		       <Grid item>
		          <Avatar src={challenge.opponent.image} />
		       </Grid>
		       <Grid>
		     <Button onClick={()=>cancelChallenge(challenge.challenge.id)} variant="raised"
		             color="primary"
		             className={classes.button} >Cancel</Button>
		       </Grid>
		     </Grid>
		        :
		       <div/>
		     
		   }
		    </Paper> 
		  
		  
	       );
    }
});
