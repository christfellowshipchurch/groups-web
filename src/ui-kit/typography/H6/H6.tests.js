import React from 'react';
import renderer from 'react-test-renderer';

import Providers from '../../../Providers';

import H6 from '.';

describe('the H6 component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <H6>Default H6 text</H6>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept and render passed in styles', () => {
    const salmonText = { color: 'salmon' };
    const tree = renderer.create(
      <Providers>
        <H6 style={salmonText}>Salmon text</H6>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with vertical rhythm (padded)', () => {
    const tree = renderer.create(
      <Providers>
        <H6 padded>H6 text with vertical rhythm styled via margin.</H6>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state', () => {
    const tree = renderer.create(
      <Providers>
        <H6 isLoading>Default H6 text</H6>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state with vertical rhythm (padded)', () => {
    const tree = renderer.create(
      <Providers>
        <H6 isLoading padded>
          Default H6 text
        </H6>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
