import * as conf from '../conf';

export function getChallenges(user){
    return function(dispatch){
	fetch(conf.url+"mychallenges/"+ user.uid,{headers:conf.headers})
	    .then( (response)=> response.json())
	    .then((data)=> dispatch({type: "MY_CHALLENGES",payload: data}));
    };
}
