import * as conf from '../conf';

export function getChallenges(user){
    return function(dispatch){
	const url = conf.url+"mychallenges/"+ user.uid;
	console.log(url);
	fetch(url,{headers:conf.headers})
	    .then( (response)=> response.json())
	    .then((data)=> dispatch({type: "MY_CHALLENGES",payload: data}));
    };
}
