
import { BrowserRouter as  Router, Route, Routes, } from 'react-router-dom';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Landing from "./pages/Landing";
import Home from './pages/Home';
import Test from './pages/Test';
import CreateCampaignPage from './pages/CreateCampaign';
import CreateCharacterPage from './pages/CreateCharacter';
import CampaignPage from './pages/Campaign';
import CharacterPage from './pages/Character';

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
  uri: 'http://localhost:3001/graphql',
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
              <Route 
                path="/Test" 
                element={<Test />}
              />
              <Route 
                path="/CreateCampaign" 
                element={<CreateCampaignPage />}
              />
              <Route 
                path="/CreateCharacter" 
                element={<CreateCharacterPage />}
              />
              <Route 
                path="/campaign/:id" 
                element={<CampaignPage />} />
                <Route 
                path="/character/:id" 
                element={<CharacterPage />} />
            </Routes>
          </div>
      </Router>
    </ApolloProvider>
  )
}
    
export default App;
