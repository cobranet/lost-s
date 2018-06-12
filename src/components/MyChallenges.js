import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Avatar,Paper,List,ListSubheader,ListItemText,ListItem} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = theme => (
    {
	root: {
	    width: '100%',
	    backgroundColor: theme.palette.background.paper,
	    margin: 5,
	}
    }
);


export default withStyles(styles)(class MyChallenges extends Component {
    render(){
	const{classes,mychallenges,refuseChallenge,acceptChallenge} = this.props;
	return(

		<Paper className={classes.root}>
		  <List subheader={<ListSubheader>Accept challenge</ListSubheader>}>
		    
		    { mychallenges.map ( (c) => {
			return (<ListItem onClick={ ()=>acceptChallenge(c.challenge.id)} key={c.challenge.id} dense button className={classes.listItem}>
				<ListItemText primary={c.main.name} />
				    <IconButton onClick={ ()=>acceptChallenge(c.challenge.id)} >
					  <Avatar alt={c.main.name} src={c.main.image} />
					</IconButton>
					<IconButton>
					      <RemoveIcon onClick={()=>refuseChallenge(c.challenge.id)} />
					      </IconButton>
				</ListItem>);
			    })}
		</List>
	      </Paper>
	);
    }
});
