import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';
import { IsLoadingContext } from '../../isLoading';

import H5 from '.';

describe('the H5 component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <H5>Default H5 text</H5>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept and render passed in styles', () => {
    const salmonText = { color: 'salmon' };
    const tree = renderer.create(
      <Providers>
        <H5 style={salmonText}>Salmon text</H5>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with vertical rhythm (withMargins)', () => {
    const tree = renderer.create(
      <Providers>
        <H5 withMargins>H5 text with vertical rhythm styled via margin.</H5>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state', () => {
    const tree = renderer.create(
      <Providers>
        <H5 isLoading>Default H5 text</H5>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state via context', () => {
    const tree = renderer.create(
      <Providers>
        <IsLoadingContext.Provider value>
          <H5>Default H5 text</H5>
        </IsLoadingContext.Provider>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state with vertical rhythm (withMargins)', () => {
    const tree = renderer.create(
      <Providers>
        <H5 isLoading withMargins>
          Default H5 text
        </H5>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
