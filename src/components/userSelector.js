import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FormControl,Select,InputLabel} from '@material-ui/core';
const styles = theme => ({
    
});

export default withStyles(styles)(class UserSelector extends Component {
    render (){
	const {classes} = this.props;
	return (
	    <div className={classes.root}>
              <FormControl className={classes.formControl}>
		<InputLabel htmlFor="age-native-simple">User</InputLabel>
		<Select
		  native
		  onChange={this.props.changeUser}
		  inputProps={{
		      id: 'age-native-simple',
		  }}
		  >
		  { this.props.users.map((user)=> 
					 <option key={user.uid} value={user.uid} >
					       {user.name}
					 </option>
    		  )}
		</Select>
              </FormControl>
	    </div>
	);
    }
});
