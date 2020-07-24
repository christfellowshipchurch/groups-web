import React from 'react';
import { storiesOf } from '@storybook/react';

import 'react-placeholder/lib/reactPlaceholder.css';

import Media from '.';

storiesOf('ui-kit/Placeholder/Media', module)
  .add('default', () => <Media />)
  .add('width', () => <Media size={'50%'} />)
  .add('showLoadingAnimation', () => <Media showLoadingAnimation />);
