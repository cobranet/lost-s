import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import UserSelector from './userSelector';
import {Grid,
	Typography,
	Avatar,
	AppBar,
	Toolbar,
	IconButton,
        Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const styles = theme => (
    {
	root: {
	    width: '100%',
	    backgroundColor: theme.palette.background.paper,
	    margin: 5,
	}
    }
);
const  users = [ {uid: "199734644140144",image: "./images/users/maka.jpg", name:"Marija Petrovic"},
		 {uid: "117392552372115", image: "./images/users/pana.jpg",name:"Pana Petrovic"},
		 {uid: "10212423291510705",image: "./images/users/braca.jpg",name: "Bratislav Petrovic"}];



export default withStyles(styles)(class Header extends Component {
    render(){
	const {classes} = this.props;
	const {changeUser,
	       user} = this.props;
	      
	       
	return (
	    <AppBar position="static">
              <Toolbar>
		<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Grid container>
    	      <UserSelector changeUser={changeUser} users={users}  />			      
    	    </Grid>
          </Typography>
	  <Avatar src={user.image}/>
          <Button color="inherit">Login</Button>
		 </Toolbar>

	    </AppBar>
	);
    }
});

