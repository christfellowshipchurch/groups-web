import React from 'react';
import { storiesOf } from '@storybook/react';

import Line from '.';

storiesOf('ui-kit/Placeholder/Line', module)
  .addDecorator((story) => (
    <div style={{ width: '50vw', height: '50vw' }}>{story()}</div>
  ))
  .add('default', () => <Line />)
  .add('width', () => <Line width={'50%'} />)
  .add('showLoadingAnimation', () => <Line showLoadingAnimation />);
