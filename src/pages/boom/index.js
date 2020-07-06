import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { withApollo } from "../../lib/apollo";
import { Title } from "../../ui";

const boom = gql`
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

function Boom() {
  const { data } = useQuery(boom);

  console.count("Boom");
  return (
    <>
      <Title>Boom pages</Title>
      <ul>
        {data?.getBrowseFilters[0]?.childContentItemsConnection?.edges[0]?.node?.childContentItemsConnection?.edges[0]?.node?.childContentItemsConnection?.edges.map(
          ({ node: { id, title } = {} }) => (
            <li key={id}>{title}</li>
          )
        )}
      </ul>
      <p>Environment variable process.env.TEST is "{process.env.TEST}"</p>
    </>
  );
}

export default withApollo()(Boom);
