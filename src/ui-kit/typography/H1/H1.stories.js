import React from 'react';
import { storiesOf } from '@storybook/react';

import PaddedDiv from '../../PaddedDiv';

import H1 from '.';

storiesOf('ui-kit/typography/H1', module)
  .addDecorator((story) => (
    <div style={{ background: 'salmon' }}>{story()}</div>
  ))
  .add('Default', () => (
    <H1>
      {
        '"Do all the good you can. By all the means you can. In all the ways you can. In all the places you can. At all the times you can. To all the people you can. As long as ever you can." ― John Wesley'
      }
    </H1>
  ))
  .add('padded', () => <H1 padded>Padded Heading Big and Long</H1>)
  .add('isLoading', () => (
    <H1 isLoading>
      {
        '"Do all the good you can. By all the means you can. In all the ways you can. In all the places you can. At all the times you can. To all the people you can. As long as ever you can." ― John Wesley'
      }
    </H1>
  ));
