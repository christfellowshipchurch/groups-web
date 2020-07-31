import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Providers from '../../../Providers';

import P from '.';

describe('the P component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Providers>
        <P>
          {`But I, brothers, could not address you as spiritual people, but as people of the flesh, as infants in Christ. I fed you with milk, not solid food, for you were not ready for it. And even now you are not yet ready, for you are still of the flesh. For while there is jealousy and strife among you, are you not of the flesh and behaving only in a human way? For when one says, "I follow Paul," and another, "I follow Apollos," are you not being merely human?`}
        </P>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should accept and render passed in styles', () => {
    const salmonText = { color: 'salmon' };
    const tree = renderer.create(
      <Providers>
        <P style={salmonText}>
          {`But I, brothers, could not address you as spiritual people, but as people of the flesh, as infants in Christ. I fed you with milk, not solid food, for you were not ready for it. And even now you are not yet ready, for you are still of the flesh. For while there is jealousy and strife among you, are you not of the flesh and behaving only in a human way? For when one says, "I follow Paul," and another, "I follow Apollos," are you not being merely human?`}
        </P>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading state', () => {
    const tree = renderer.create(
      <Providers>
        <P isLoading>Loading state</P>
      </Providers>
    );
    expect(tree).toMatchSnapshot();
  });
});
