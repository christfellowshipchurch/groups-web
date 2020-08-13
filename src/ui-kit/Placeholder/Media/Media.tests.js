import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import Media from '.';

describe('The Media placeholder', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <Media isLoading />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render children when isLoading = false', () => {
    const tree = renderer.create(
      <Providers>
        <Media>Rendered child</Media>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a custom size string', () => {
    const tree = renderer.create(
      <Providers>
        <Media isLoading size={'50%'} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a custom size number', () => {
    const tree = renderer.create(
      <Providers>
        <Media isLoading size={10} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('accepts custom styles', () => {
    const customStyle = { background: 'salmon' };

    const tree = renderer.create(
      <Providers>
        <Media isLoading style={customStyle} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render showLoadingAnimation', () => {
    const tree = renderer.create(
      <Providers>
        <Media isLoading showLoadingAnimation />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
