import { ApolloProvider} from '@apollo/client'
import { client } from './lib/apollo'
import { Router } from './Router'

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `


function App() {

  /*
  ==== REQUISIÇÃO SEM UTILIZAR O APOLLO ===
  COM AXIOS OU O FETCH
  // useEffect(() => {
  //   fetch('https://api-sa-east-1.graphcms.com/v2/cl4oypcbn199o01xt0doef31e/master', {
  //     method: 'POST',
  //     body: `query {
          aqui viria a query
  //     }`
  //   })
  // }, []);

  === COM O APOLLO INTALADO E USANDO O USEEFECT ===

  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then( response => {
      console.log(response.data)
    })
  })
  */

  
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
