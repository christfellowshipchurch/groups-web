import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import CardWrapper from '.';

describe('the CardWrapper component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <CardWrapper>Boom!</CardWrapper>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept a backgroundColor', () => {
    const tree = renderer.create(
      <Providers>
        <CardWrapper cardColor={'salmon'}>Boom!</CardWrapper>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept and render passed in styles', () => {
    const cardDimensions = {
      paddingTop: '56.25%',
      width: '100%',
    };

    const tree = renderer.create(
      <Providers>
        <CardWrapper style={cardDimensions}>Boom!</CardWrapper>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept additional props', () => {
    const tree = renderer.create(
      <Providers>
        <CardWrapper role={'article listitem'}>Boom!</CardWrapper>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
