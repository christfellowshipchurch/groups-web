import React from 'react';
import { storiesOf } from '@storybook/react';

import CardImage from '.';

storiesOf('ui-kit/card/CardImage', module).add('default', () => (
  <CardImage src={'https://picsum.photos/300/200'} />
));
