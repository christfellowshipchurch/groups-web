import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { withApollo } from '../../lib/apollo';
import { H1, H4 } from '../../ui-kit';

import exampleQuery from './exampleQuery';

function Boom() {
  const { data, loading } = useQuery(exampleQuery);
  const loadingStateData = {
    getBrowseFilters: [
      {
        id: 'ContentChannel:cceb75eb1d10b58fce44fc17a4d67676',
        childContentItemsConnection: {
          edges: [
            {
              node: {
                id: 'UniversalContentItem:6964524ab0265004f88579bd65670549',
                childContentItemsConnection: {
                  edges: [
                    {
                      node: {
                        id:
                          'UniversalContentItem:d99a94b1f71b0bcec4075c5ee2eafe41',
                        childContentItemsConnection: {
                          edges: [
                            {
                              node: {
                                id: 'fakeId1',
                                title: '',
                                __typename: '',
                              },
                              __typename: '',
                            },
                            {
                              node: {
                                id: 'fakeId2',
                                title: '',
                                __typename: '',
                              },
                              __typename: '',
                            },
                            {
                              node: {
                                id: 'fakeId3',
                                title: '',
                                __typename: '',
                              },
                              __typename: 'ContentItemsConnectionEdge',
                            },
                          ],
                          __typename: 'ContentItemsConnection',
                        },
                        __typename: 'UniversalContentItem',
                      },
                      __typename: 'ContentItemsConnectionEdge',
                    },
                  ],
                  __typename: 'ContentItemsConnection',
                },
                __typename: 'UniversalContentItem',
              },
              __typename: 'ContentItemsConnectionEdge',
            },
          ],
          __typename: 'ContentItemsConnection',
        },
        __typename: 'ContentChannel',
      },
    ],
  };

  const boom = loading ? loadingStateData : data;
  console.log(JSON.stringify(data));
  return (
    <>
      <H1>Boom pages</H1>
      {boom?.getBrowseFilters[0]?.childContentItemsConnection?.edges[0]?.node?.childContentItemsConnection?.edges[0]?.node?.childContentItemsConnection?.edges.map(
        ({ node: { id, title } = {} }) => (
          <H4 isLoading={loading} key={id}>
            {title}
          </H4>
        )
      )}
      <p>{`Environment variable process.env.TEST is "${process.env.TEST}"`}</p>
    </>
  );
}

export default withApollo()(Boom);
