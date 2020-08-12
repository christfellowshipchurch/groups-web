import React from 'react';
import renderer from 'react-test-renderer';

import { getIsLoading, withIsLoading } from '.';

describe('the withIsLoading HOC', () => {
  it('should render', () => {
    const ParentComponentPassingConext = withIsLoading(
      ({ children }) => children
    );

    const tree = renderer.create(
      <ParentComponentPassingConext>
        <h1>Boom</h1>
      </ParentComponentPassingConext>
    );

    expect(tree).toMatchSnapshot();
  });
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
