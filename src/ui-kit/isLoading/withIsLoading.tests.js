import React from 'react';
import renderer from 'react-test-renderer';

// import Providers from '../../Providers';

import { getIsLoading, withIsLoading } from '.';

describe('the withIsLoading HOC', () => {
  it('should pass the isLoading prop (true) to context for children to consume', () => {
    const ChildComponentGettingContext = getIsLoading(({ isLoading }) =>
      isLoading.toString()
    );

    const ParentComponentPassingConext = withIsLoading(() => (
      <ChildComponentGettingContext />
    ));

    const tree = renderer.create(<ParentComponentPassingConext isLoading />);

    expect(tree).toMatchSnapshot();
  });
});
