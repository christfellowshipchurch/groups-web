import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from '.';

storiesOf('ui-kit/Image', module)
  .add('default', () => <Image src={'https://picsum.photos/300/200'} />)
  .add('isLoading', () => <Image isLoading />);
