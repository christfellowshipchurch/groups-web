import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import Line from '.';

describe('the Line component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <Line />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with a custom width', () => {
    const tree = renderer.create(
      <Providers>
        <Line width={'50%'} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
