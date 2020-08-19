import { ApolloLink } from '@apollo/client';

const authLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const token =
    typeof window === 'undefined'
      ? ''
      : localStorage.getItem(process.env.AUTH_TOKEN_KEY);

  operation.setContext(({ headers }) => ({
    headers: {
      authorization: token,
      ...headers,
    },
  }));
  return forward(operation);
});

export default authLink;
