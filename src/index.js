import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Importing stuff needed for Apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-client-preset';
// Importing stuff needed for Apollo ends

import { BrowserRouter } from 'react-router-dom';

// Initialising Apollo and the connection with backend
const httpLink = new HttpLink({ uri:'https://api.github.com/graphql' });

const middleWareAuthLink = new ApolloLink((operation,forward) => {
  const token = localStorage.getItem('AUTH_TOKEN');
  operation.setContext({
    headers: {
      Authorization: `bearer ${token}`
    }
  });
  return forward(operation);
});

const httpLinkWithAuthToken = middleWareAuthLink.concat(httpLink);

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache(),
  clientState: {
    defaults: {
      loggedIn: false
    }
  }
});
// Initialisation ends.

ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
