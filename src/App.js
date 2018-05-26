import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import {Button,Grid,Paper,Typography,Avatar} from '@material-ui/core';
import GCard from './components/GCard';
import UserSelector from './components/userSelector';
import {connect} from 'react-redux';
import SockJsClient from 'react-stomp';
import * as useractions from './actions/userActions';
import * as utilactions from './actions/utilActions';

const  users = [ {uid: "199734644140144",image: "./images/users/maka.jpg", name:"Marija Petrovic"},
           {uid: "117392552372115", image: "./images/users/pana.jpg",name:"Pana Petrovic"},
		 {uid: "10212423291510705",image: "./images/users/braca.jpg",name: "Bratislav Petrovic"}];

const url = 'http://localhost:8080/api';

const styles = theme => ({
    root : {
    },
    paper: {
      padding: 10,
	margin: 10,
        flexGrow: 1,
	minHeight: 400,
	minWidth: 600,
	backgroundColor: "lightGrey",
	position: "absolute",	
    },
    avatar: {
	margin: 10,
    },
    top: {
	textAlign: 'center'
    }
});


let App = withStyles(styles)(class App extends Component {

    componentWillMount=()=>{
	this.props.dispatch(useractions.startLogin());
	this.props.dispatch(useractions.login(users[0]));
    }
    connect=()=>{
	this.props.dispatch(utilactions.connect(this.clientRef));
    }
    disconnect=()=>{
	this.props.dispatch(utilactions.disconnect(null));
	this.props.dispatch(utilactions.error("WEBSOCKET disconnect"));
    }
    changeUser=(e)=>{
	console.log(e);
    }
    onSend = (message)=>{
	console.log("SEND");
	const msg={message: message};
	const topic = "/app/hello/"+this.props.user.uid;
	console.log(topic);
	console.log(this.clientRef);
	this.clientRef.sendMessage(topic  ,JSON.stringify(msg));

    }


    onMessage=(msg)=>{
	console.log(msg);
	this.props.dispatch({type: msg.type, payload: JSON.parse(msg.payload)});
    }

    
    render() {
	const {classes} = this.props;
	const {user} = this.props; 
	return (
	    
	    <Grid container>
	      <Button  onClick={ (e)=>{this.onSend("test")} } >SEND</Button>
	      <UserSelector changeUser={this.changeUser} users={users}  />			      
	      { user.uid ?
		  <div> Sock
	      <SockJsClient url={url}
			    topics={['/topic/me/' + user.uid , '/topic/loby' ] }
			    onMessage={(msg) => { this.onMessage(msg) }}
		    onConnect={()=> { this.connect();} }
		    onDisconnect={ ()=>{ this.disconnect();}}
		    ref={ (client) => { this.clientRef = client }}
 
		/> </div> : null }

		  
		  <Grid item xs={12}>
		    { user.name ? <Avatar alt={user.name} src={user.image}  className={classes.avatar} /> : null }
		    <Typography>{this.props.error ? this.props.error.message : null  }</Typography>
	      </Grid>
	      <Grid item xs={12}>
		<Paper  className={classes.paper} >
		  <GCard x={30} y={60}   size={100} color={0} value={2} />
		  <GCard  x={60} y={60}   size={100} color={1} value={7} />
		  <GCard  x={90} y={60}   size={100} color={1} value={10} />
		</Paper>
      	      </Grid>
	    </Grid>
	);
    }
});
App = connect((store)=>{
    return { user: store.user,error: store.error };
})(App);

export default App;
