import React from 'react';
import { storiesOf } from '@storybook/react';

import CardContent from '.';

storiesOf('ui-kit/card/CardContent', module)
  .addDecorator((story) => (
    <div style={{ width: '50%', background: 'salmon' }}>{story()}</div>
  ))
  .add('default', () => <CardContent>Padded card content</CardContent>);
