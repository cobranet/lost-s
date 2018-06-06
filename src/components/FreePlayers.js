import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {List,ListItem,IconButton,Paper, ListItemText,ListSubheader,Avatar} from '@material-ui/core';

const styles = theme => (
    {
	root: {
	    width: '100%',
	    backgroundColor: theme.palette.background.paper,
	    margin: 5,
	}
    }
);

export default withStyles(styles)(
    class FreePlayers extends Component {

	render(){
	    
	    const{classes,players,uid,newChallenge} = this.props;
	    return (
		<Paper className={classes.root}>
		  <List subheader={<ListSubheader>Challenge players</ListSubheader>}>
		    
		    { players.filter((player)=>{ return player.uid !== uid;  }).map ( (player) => {
			return (<ListItem onClick={()=>newChallenge(player.uid)}  key={player.uid} dense button className={classes.listItem}>
				<ListItemText primary={player.name} />
				    <IconButton>
					  <Avatar alt={player.name} src={player.image} />
					</IconButton>
				</ListItem>);
			    })}
		</List></Paper>
	    );
	}	  
    });
