import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Challenge from './Challenge';


const styles = theme => (
    {
	root: {
	    width: '100%',
	    backgroundColor: theme.palette.background.paper,
	    margin: 5,
	}
    }
);


export default withStyles(styles)(class ChallengeWnd extends Component {
    render(){
	const {cancelChallenge,
	       challenge} = this.props;
	return (
	    <Challenge cancelChallenge={cancelChallenge}
		       challenge={challenge} />
	);
    }
});

