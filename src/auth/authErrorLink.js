import { onError } from '@apollo/client/link/error';

const authErrorLink = (logout) =>
  onError(({ graphQLErrors }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ extensions: { code } }) => {
        if (code === 'UNAUTHENTICATED') {
          if (typeof window !== 'undefined') logout();
        }
        return null;
      });

    return null;
  });
export default authErrorLink;
