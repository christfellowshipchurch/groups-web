import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../Providers';

import Image from '.';

describe('the Image component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <Image src={'https://picsum.photos/300/200'} />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state (isLoading)', () => {
    const tree = renderer.create(
      <Providers>
        <Image src={'https://picsum.photos/300/200'} isLoading />
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
