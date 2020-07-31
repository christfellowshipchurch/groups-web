import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import H2 from '.';

describe('the H2 component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <H2>Default H2 text</H2>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept and render passed in styles', () => {
    const salmonText = { color: 'salmon' };
    const tree = renderer.create(
      <Providers>
        <H2 style={salmonText}>Salmon text</H2>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with vertical rhythm (padded)', () => {
    const tree = renderer.create(
      <Providers>
        <H2 padded>H2 text with vertical rhythm styled via margin.</H2>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state', () => {
    const tree = renderer.create(
      <Providers>
        <H2 isLoading>Default H2 text</H2>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state with vertical rhythm (padded)', () => {
    const tree = renderer.create(
      <Providers>
        <H2 isLoading padded>
          Default H2 text
        </H2>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
