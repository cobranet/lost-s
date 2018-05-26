import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
const coef = 88/56;
const styles = theme => ({
    card : {
	borderRadius: "5px ",
	backgroundColor: "white"
    }

});

const images = ["desert","ice","jungle","sea","volcano"];

export default withStyles(styles)(class GCard extends Component {
    render(){
	const {classes} = this.props;
	const {color,value,size,x,y} = this.props;
	const image = "./cards/" + images[color] + ".png";
	const cardStyle = {
	    width: size + 10,
	    height: coef*size + 10*coef,
	    borderRadius: 5,
	    position: "absolute",
	    left: x,
	    top: y,
	    boxShadow: "1px 2px 0px 1px #888888",

	};
	const imgStyle=  {
	    marginLeft: 5,
	    width: size,
	    height: -coef*size,
	    marginTop: 5*coef,
	    
	};
	const numStyle= {
	    marginTop: -size*coef-5  ,
	    marginLeft: 10,
	    color: "white",
	    fontSize: 30 
	};
	return (
	    <div style={cardStyle}  className={classes.card}>
	      <img alt={images[color]+value}  style={imgStyle} className={classes.img} src={image}/>
	      <div style={numStyle}>
		{value}
	      </div>

	    </div>
	);
    }
});
