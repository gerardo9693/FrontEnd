import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

const API_URL = 'https://backendblog-7pvzldquh.now.sh/';

const HttpLink=createHttpLink({
    uri:API_URL
});

const authLink=setContext((_,{headers})=>{
    const token=localStorage.getItem('blogToken');
    const contex = {
        headers:{
            ...headers
        }
    }

    // if(token) contex.headers['authorization']=`JWT ${token}`

    return contex;


    
});

export default new ApolloClient({
    link:authLink.concat(HttpLink),
    cache:new InMemoryCache()
});