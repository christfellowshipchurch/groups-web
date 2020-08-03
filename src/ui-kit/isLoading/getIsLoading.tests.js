import React from 'react';
import renderer from 'react-test-renderer';

// import Providers from '../../Providers';

import { getIsLoading, IsLoadingContext } from '.';

describe('the getIsLoading HOC', () => {
  it('should return false from context', () => {
    const Context = getIsLoading(({ isLoading }) => isLoading.toString());

    const tree = renderer.create(
      <IsLoadingContext.Provider value={false}>
        <Context />
      </IsLoadingContext.Provider>
    );

    expect(tree).toMatchSnapshot();
  });
  it('should return true from context', () => {
    const Context = getIsLoading(({ isLoading }) => isLoading.toString());

    const tree = renderer.create(
      <IsLoadingContext.Provider value>
        <Context />
      </IsLoadingContext.Provider>
    );

    expect(tree).toMatchSnapshot();
  });
  it('should return the isLoading value (true) from the component', () => {
    const Context = getIsLoading(({ isLoading }) => isLoading.toString());

    const tree = renderer.create(
      <IsLoadingContext.Provider>
        <Context isLoading />
      </IsLoadingContext.Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
