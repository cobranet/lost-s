import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import FreePlayers from './FreePlayers';
import MyChallenges from './MyChallenges.js';
import {Grid} from '@material-ui/core';

const styles = theme => (
    {
	root: {
	    width: '100%',
	    backgroundColor: theme.palette.background.paper,
	    margin: 5,
	}
    }
);


export default withStyles(styles)(class Waiting extends Component {
    render(){
	const {freeplayers,
	       user,
	       newChallenge,
	       acceptChallenge,
	       refuseChallenge,
	       mychallenges} = this.props; 
	return (
	    <Grid container >
    	      <Grid item xs={6} >
    		<FreePlayers newChallenge={newChallenge}
			     uid={user.uid}
			     players={freeplayers} />
    	      </Grid>
              {  mychallenges.length ? 
    	      <Grid>
    		<MyChallenges acceptChallenge={acceptChallenge}
    			      refuseChallenge={refuseChallenge}
    			      mychallenges={mychallenges}  />
    	      </Grid> : <div/> }
    	    </Grid> );
    }
});

