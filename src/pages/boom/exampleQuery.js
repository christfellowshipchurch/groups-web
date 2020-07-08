import gql from 'graphql-tag';

const exampleQuery = gql`
  query getBrowseFilters {
    getBrowseFilters {
      id
      childContentItemsConnection(first: 1) {
        edges {
          node {
            id

            childContentItemsConnection(first: 1) {
              edges {
                node {
                  id

                  childContentItemsConnection(first: 4) {
                    edges {
                      node {
                        id
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default exampleQuery;
