import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../Providers';

import Index from '.';

describe('the home page', () => {
  it('should render', () => {
    const tree = renderer
      .create(
        <Providers>
          <Index />
        </Providers>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
