import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
const coef = 88/56;
const styles = theme => ({
    card : {
	borderRadius: "5px ",
	backgroundColor: "white"
    },
    placeholder: {
     opacity: 0.5
    },
    img: {
	
    }

});

const images = ["desert","ice","jungle","sea","volcano"];

export default withStyles(styles)(class GCard extends Component {
    
    render(){
	const {classes} = this.props;
	const {color,value,size,x,y,selected,placeholder,index} = this.props;
	const {onCardClick} = this.props;
	const image = "./cards/" + images[color] + ".png";
	const cardStyle = {
	    width: size + 4,
	    height: coef*size + 4*coef,
	    borderRadius: 5,
	    position: "absolute",
	    left: x,
	    top: y,
	    boxShadow: "1px 2px 0px 1px #888888",

	};
	const cardStyleSelected = {
	    width: size + 4,
	    height: coef*size + 4*coef,
	    borderRadius: 5,
	    position: "absolute",
	    left: x,
	    top: y - 30,
	    boxShadow: "1px 2px 0px 1px #888888",

	};
	const imgStyle=  {
	    marginLeft: 2,
	    width: size,
	    height: -coef*size,
	    marginTop: 2*coef,
	    
	};
	const numStyle= {
	    marginTop: -size*coef-2  ,
	    marginLeft: 4,
	    color: "white",
	    fontSize: 30 
	};

	const img = placeholder ? classes.placeholder : classes.img; 
	
	
	return (
	    <div onClick={ () => onCardClick(index) }  style={ selected ? cardStyleSelected : cardStyle}  className={classes.card}>
	      <img alt={images[color]+value}  style={imgStyle} className={img} src={image}/>
	      {selected}
	      <div style={numStyle}>
		{ value !== -1 ?  value === -2 ? "" : value  : "X" }
              </div>
	    </div>
	);
    }
});
