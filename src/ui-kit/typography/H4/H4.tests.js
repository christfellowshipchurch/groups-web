import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';
import { IsLoadingContext } from '../../isLoading';

import H4 from '.';

describe('the H4 component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <H4>Default H4 text</H4>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept and render passed in styles', () => {
    const salmonText = { color: 'salmon' };
    const tree = renderer.create(
      <Providers>
        <H4 style={salmonText}>Salmon text</H4>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with vertical rhythm (withMargins)', () => {
    const tree = renderer.create(
      <Providers>
        <H4 withMargins>H4 text with vertical rhythm styled via margin.</H4>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state', () => {
    const tree = renderer.create(
      <Providers>
        <H4 isLoading>Default H4 text</H4>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state via context', () => {
    const tree = renderer.create(
      <Providers>
        <IsLoadingContext.Provider value>
          <H4>Default H4 text</H4>
        </IsLoadingContext.Provider>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state with vertical rhythm (withMargins)', () => {
    const tree = renderer.create(
      <Providers>
        <H4 isLoading withMargins>
          Default H4 text
        </H4>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
