/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import {onError} from '@apollo/client/link/error'

  const errorLink = onError(({ graphqlErrors, networkError}) => {
    if(graphqlErrors){
      graphqlErrors.map(({message, location,  path}) => {
        return (alert(`Graphql error ${message}`))
      });
    }
  });
  
  const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:4000/' }),
  ]); 

  const client = new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        AttributeSet: {
          keyFields: ["id", "name", "items"],
        },
      },
    }),
    link:link,
  });

export default client;