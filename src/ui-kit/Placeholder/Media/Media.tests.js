import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import Media from '.';

describe('The Media placeholder', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <Media />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a custom size', () => {
    const tree = renderer.create(
      <Providers>
        <Media size="50%" />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
