import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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

const images = ["desert","ice","jungle","sea","volcano","back"];

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
	    left: x + 30,
	    top: y ,
	    boxShadow: "1px 2px 0px 1px #888888",

	};
	const imgStyle=  {
	    marginLeft: 2,
	    width: size,
	    height: -coef*size,
	    marginTop: 2*coef,
	    
	};
	const numStyleRight= {
	    marginTop: -size*coef-2  ,
	    marginLeft: 13,
	    color: "white",
	    fontSize: size / 3.5,
	    textShadow: '-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000'
	};
	const numStyleLeft= {
	    marginTop: -size*coef-2  ,
	    marginLeft: 4,
	    color: "white",
	    fontSize: size / 3.5,
	    textShadow: '-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000'
	};

	const img = placeholder ? classes.placeholder : classes.img; 
	
	
	return (
	    <div onClick={ () => onCardClick(index) }  style={ selected ? cardStyleSelected : cardStyle}  className={classes.card}>
	      <img alt={images[color]+value}  style={imgStyle} className={img} src={image}/>
	      <Grid container>
		<Grid item xs={6}>
		  <div style={numStyleLeft}>
		    { value !== -1 ?  value === -2 ? "" : value  : "X" }
		  </div>
		</Grid>
		<Grid item xs={6}>
		  <div style={numStyleRight}>
		    { value !== -1 ?  value === -2 ? "" : value  : "X" }
		  </div>
		</Grid>
	      </Grid>
	    </div>
	);
    }
});
