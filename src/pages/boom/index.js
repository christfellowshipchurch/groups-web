import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';
import { H1 } from '../../ui-kit';

import exampleQuery from './exampleQuery';

function Boom() {
  const { data } = useQuery(exampleQuery);

  return (
    <>
      <H1>Boom pages</H1>
      <ul>
        {data?.getBrowseFilters[0]?.childContentItemsConnection?.edges[0]?.node?.childContentItemsConnection?.edges[0]?.node?.childContentItemsConnection?.edges.map(
          ({ node: { id, title } = {} }) => (
            <li key={id}>{title}</li>
          )
        )}
      </ul>
      <p>{`Environment variable process.env.TEST is "${process.env.TEST}"`}</p>
    </>
  );
}

export default withApollo()(Boom);
