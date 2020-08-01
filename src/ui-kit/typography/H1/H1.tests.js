import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import { IsLoadingContext } from '../../isLoading';

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
    const salmonText = { color: 'salmon' };
    const tree = renderer.create(
      <Providers>
        <H1 style={salmonText}>Salmon text</H1>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with vertical rhythm (padded)', () => {
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
  it('should render a loading state via context', () => {
    const tree = renderer.create(
      <Providers>
        <IsLoadingContext.Provider value>
          <H1>Default H1 text</H1>
        </IsLoadingContext.Provider>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state with vertical rhythm (padded)', () => {
    const tree = renderer.create(
      <Providers>
        <H1 isLoading padded>
          Default H1 text
        </H1>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
