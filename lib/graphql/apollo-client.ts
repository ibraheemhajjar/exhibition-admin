import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import {
  CombinedGraphQLErrors,
  CombinedProtocolErrors,
} from '@apollo/client/errors';

// Auth link - adds token to headers if exists
const authLink = new ApolloLink((operation, forward) => {
  // TODO: Get token from auth context/storage when real auth is implemented
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

// HTTP link to GraphQL endpoint
const httpLink = new HttpLink({
  uri: 'https://exhibition-city-backend-production.up.railway.app/graphql',
});

// Error handling link - Apollo Client v4 way
const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    // Handle GraphQL errors
    error.errors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );

      // TODO: Handle auth errors (401/403) - redirect to login
      if (message.includes('Unauthorized') || message.includes('Forbidden')) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
        }
      }
    });
  } else if (CombinedProtocolErrors.is(error)) {
    // Handle protocol errors
    error.errors.forEach(({ message, extensions }) => {
      console.error(
        `[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(extensions)}`
      );
    });
  } else {
    // Handle network errors
    console.error(`[Network error]: ${error}`);
  }
});

// Create Apollo Client instance
export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
