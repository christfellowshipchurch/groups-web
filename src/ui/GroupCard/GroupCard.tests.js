import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../Providers';

import GroupCard from '.';

describe('the GroupCard component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <GroupCard
          coverImage={'https://picsum.photos/840/472'}
          title={'Group Name'}
        />
      </Providers>
    );

    expect(tree).toMatchSnapshot();
  });
  it('should render with a groupSize', () => {
    const tree = renderer.create(
      <Providers>
        <GroupCard
          coverImage={'https://picsum.photos/840/472'}
          groupSize={11}
          title={'Group Name'}
        />
      </Providers>
    );

    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state ', () => {
    const tree = renderer.create(
      <Providers>
        <GroupCard
          coverImage={'https://picsum.photos/840/472'}
          groupSize={11}
          isLoading
          label={'Label Name'}
          location={'Location Name'}
          title={'Group Name'}
        />
      </Providers>
    );

    expect(tree).toMatchSnapshot();
  });
  it('should render with a label', () => {
    const tree = renderer.create(
      <Providers>
        <GroupCard
          coverImage={'https://picsum.photos/840/472'}
          label={'Label Name'}
          title={'Group Name'}
        />
      </Providers>
    );

    expect(tree).toMatchSnapshot();
  });
  it('should render with a location', () => {
    const tree = renderer.create(
      <Providers>
        <GroupCard
          coverImage={'https://picsum.photos/840/472'}
          location={'Location Name'}
          title={'Group Name'}
        />
      </Providers>
    );

    expect(tree).toMatchSnapshot();
  });
});
