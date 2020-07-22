import React from 'react';
import { storiesOf } from '@storybook/react';

import PaddedView from '.';

storiesOf('ui-kit/PaddedView', module)
  .add('default', () => <PaddedView>This text is in a PaddedView</PaddedView>)
  .add('horizontal (false)', () => (
    <PaddedView horizontal={false}>
      This text is in a PaddedView without horizontal padding
    </PaddedView>
  ))
  .add('vertical (false)', () => (
    <PaddedView vertical={false}>
      This text is in a PaddedView without vertical padding
    </PaddedView>
  ));
