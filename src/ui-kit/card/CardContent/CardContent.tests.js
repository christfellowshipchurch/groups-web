import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import CardContent from '.';

describe('the CardContent component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <CardContent>Boom!</CardContent>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
