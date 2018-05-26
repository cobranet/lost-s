export function error(error){
    return {
	type: "ERROR",
	payload: error
    }
}

export function connect(client){
    return {
	type: "CONNECT",
	payload: client
    }
}

export function disconnect(){
    return {
	type: "DISCONNECT",
	payload: null
    }
}
    
