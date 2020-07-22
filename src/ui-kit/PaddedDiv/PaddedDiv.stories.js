import React from 'react';
import { storiesOf } from '@storybook/react';

import PaddedDiv from '.';

storiesOf('ui-kit/PaddedDiv', module)
  .add('default', () => <PaddedDiv>This text is in a PaddedDiv</PaddedDiv>)
  .add('horizontal (false)', () => (
    <PaddedDiv horizontal={false}>
      This text is in a PaddedDiv without horizontal padding
    </PaddedDiv>
  ))
  .add('vertical (false)', () => (
    <PaddedDiv vertical={false}>
      This text is in a PaddedDiv without vertical padding
    </PaddedDiv>
  ));
