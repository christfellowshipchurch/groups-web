import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import Paragraph from '.';

describe('The Paragraph placeholder', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <Paragraph isLoading />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render children when isLoading is false', () => {
    const tree = renderer.create(
      <Providers>
        <Paragraph>Rendered child</Paragraph>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with a custom lineNumber', () => {
    const tree = renderer.create(
      <Providers>
        <Paragraph isLoading lineNumber={50} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with a custom firstLineWidth', () => {
    const tree = renderer.create(
      <Providers>
        <Paragraph firstLineWidth={'23%'} isLoading />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render with a custom lastLineWidth', () => {
    const tree = renderer.create(
      <Providers>
        <Paragraph isLoading lastLineWidth={'33%'} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('accepts custom line styles', () => {
    const customStyle = { background: 'salmon' };

    const tree = renderer.create(
      <Providers>
        <Paragraph isLoading style={customStyle} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render showLoadingAnimation', () => {
    const tree = renderer.create(
      <Providers>
        <Paragraph isLoading showLoadingAnimation />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
