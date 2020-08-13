import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import CardImage from '.';

describe('the CardImage component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <CardImage src={'https://picsum.photos/300/200'} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state (isLoading)', () => {
    const tree = renderer.create(
      <Providers>
        <CardImage src={'https://picsum.photos/300/200'} isLoading />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
