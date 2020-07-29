import React from 'react';
import renderer from 'react-test-renderer';

import { H1 } from '../../typography';
import Providers from '../../../Providers';

import Typography from '.';

describe('The Typography placeholder', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <Typography typographicClassName={'h1'}>
          <H1>Boom</H1>
        </Typography>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render children', () => {
    const tree = renderer.create(
      <Providers>
        <Typography isLoading={false} typographicClassName={'h1'}>
          <H1>Boom</H1>
        </Typography>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
