import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../Providers';

import PaddedView from '.';

describe('the PaddedView component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <PaddedView />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render without horizontal padding', () => {
    const tree = renderer.create(
      <Providers>
        <PaddedView horizontal={false} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render without vertical padding', () => {
    const tree = renderer.create(
      <Providers>
        <PaddedView vertical={false} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
