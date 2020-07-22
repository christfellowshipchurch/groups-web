import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../Providers';

import PaddedDiv from '.';

describe('the PaddedDiv component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <PaddedDiv />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render without horizontal padding', () => {
    const tree = renderer.create(
      <Providers>
        <PaddedDiv horizontal={false} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render without vertical padding', () => {
    const tree = renderer.create(
      <Providers>
        <PaddedDiv vertical={false} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
