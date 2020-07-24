import React from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from '.';

storiesOf('ui-kit/Placeholder/Paragraph', module)
  .add('default', () => <Paragraph />)
  .add('showLoadingAnimation', () => <Paragraph showLoadingAnimation />);
