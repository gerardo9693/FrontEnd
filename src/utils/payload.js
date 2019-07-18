
// export default function(){

// 	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDMwZmRlNzg0ZDJjMjE0ZTRmNzE4ZTYiLCJjQ29ycmVvIjoicHJ1QHBydS5jb20iLCJleHAiOjE1NjM1NzkzMTE3NzgsImlhdCI6MTU2MzQ5MjkxMX0.Kv-KxzzwK_cKVYbUxUy83uo-82h_PARjugJSPy5yyz8"

// 	if(token){
// 		const baseUri =  token.split('.')[1];
// 		const base64 =  baseUri.replace('-','+').replace('_','/')
// 		const payload = JSON.parse(window.atob(base64));

// 		return {
// 			isAuthenticated: true,
// 			user:{...payload}
// 		}
// 	}else{
// 		return {
// 			isAuthenticated: false,
// 			user:null
// 		}
// 	}


// }



export default function(){

	const token = localStorage.getItem('blogToken')

	if(token){
		const baseUri =  token.split('.')[1];
		const base64 =  baseUri.replace('-','+').replace('_','/')
		const payload = JSON.parse(window.atob(base64));

		return {
			isAuthenticated: true,
			user:{...payload}
		}
	}else{
		return {
			isAuthenticated: false,
			user:null
		}
	}


}