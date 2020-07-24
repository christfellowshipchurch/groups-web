import React from 'react';
import { storiesOf } from '@storybook/react';

import Line from '.';

storiesOf('ui-kit/Placeholder/Line', module)
  .add('default', () => <Line />)
  .add('width', () => <Line width={'50%'} />)
  .add('showLoadingAnimation', () => <Line showLoadingAnimation />);
