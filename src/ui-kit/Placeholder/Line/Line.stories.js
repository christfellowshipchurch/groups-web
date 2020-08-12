import React from 'react';
import { storiesOf } from '@storybook/react';

import Line from '.';

storiesOf('ui-kit/Placeholder/Line', module)
  .addDecorator((story) => (
    <div style={{ width: '50vw', height: '50vw' }}>{story()}</div>
  ))
  .add('default', () => <Line>Renderd child</Line>)
  .add('isLoading ', () => <Line isLoading />)
  .add('style', () => <Line isLoading style={{ background: 'salmon' }} />)
  .add('width', () => <Line isLoading width={'50%'} />)
  .add('showLoadingAnimation', () => <Line isLoading showLoadingAnimation />);
