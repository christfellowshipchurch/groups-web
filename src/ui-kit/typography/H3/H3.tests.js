import React from 'react';
import renderer from 'react-test-renderer';

import Providers from '../../../Providers';

import H3 from '.';

describe('the H3 component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <H3>Default H3 text</H3>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept and render passed in styles', () => {
    const salmonText = { color: 'salmon' };
    const tree = renderer.create(
      <Providers>
        <H3 style={salmonText}>Salmon text</H3>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with vertical rhythm (padded)', () => {
    const tree = renderer.create(
      <Providers>
        <H3 padded>H3 text with vertical rhythm styled via margin.</H3>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state', () => {
    const tree = renderer.create(
      <Providers>
        <H3 isLoading>Default H3 text</H3>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
