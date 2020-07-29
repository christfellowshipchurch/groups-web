import React from 'react';
import renderer from 'react-test-renderer';

import Providers from '../../../Providers';

import H1 from '.';

describe('the H1 component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <H1>Default H1 text</H1>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept and render passed in styles', () => {
    const salmon = { color: 'salmon' };
    const tree = renderer.create(
      <Providers>
        <H1 style={salmon}>Salmon text</H1>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with ', () => {
    const tree = renderer.create(
      <Providers>
        <H1 padded>H1 text with vertical rhythm styled via margin.</H1>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state', () => {
    const tree = renderer.create(
      <Providers>
        <H1 isLoading>Default H1 text</H1>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
