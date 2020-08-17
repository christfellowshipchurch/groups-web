import { setContext } from 'apollo-link-context';

export default setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(process.env.AUTH_TOKEN_KEY);
  if (!token || token === '') {
    return {};
  }

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});
