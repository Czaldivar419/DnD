
import { BrowserRouter as  Router, Route, Routes, } from 'react-router-dom';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Landing from "./pages/Landing";
import Home from './pages/Home';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <div>
            <Routes>
              <Route 
                path="/"
                element={<Landing />}
              />
              <Route 
                path="/Home" 
                element={<Home />}
              />
            </Routes>
          </div>
      </Router>
    </ApolloProvider>
  )
}
    
export default App;
