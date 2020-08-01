import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';
import { IsLoadingContext } from '../../isLoading';

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
  it('should render with vertical rhythm (withMargins)', () => {
    const tree = renderer.create(
      <Providers>
        <H3 withMargins>H3 text with vertical rhythm styled via margin.</H3>
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
  it('should render a loading state via context', () => {
    const tree = renderer.create(
      <Providers>
        <IsLoadingContext.Provider value>
          <H3>Default H3 text</H3>
        </IsLoadingContext.Provider>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state with vertical rhythm (withMargins)', () => {
    const tree = renderer.create(
      <Providers>
        <H3 isLoading withMargins>
          Default H3 text
        </H3>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
