import React from 'react';
import renderer from 'react-test-renderer';

import Providers from '../../../Providers';

import GlobalStyles from '.';

describe.only('the GlobalStyles component', () => {
  it('should render', () => {
    renderer.create(
      <Providers>
        <GlobalStyles />
      </Providers>
    );
    const styleTags = document.head.getElementsByTagName('style');
    expect(styleTags).toMatchSnapshot();
  });
});
