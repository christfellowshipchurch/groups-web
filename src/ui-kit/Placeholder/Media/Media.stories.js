import React from 'react';
import { storiesOf } from '@storybook/react';

import 'react-placeholder/lib/reactPlaceholder.css';

import Media from '.';

storiesOf('ui-kit/Placeholder/Media', module)
  .addDecorator((story) => (
    <div style={{ width: '50vw', height: '50vw' }}>{story()}</div>
  ))
  .add('default', () => <Media />)
  .add('width', () => <Media size={'50%'} />)
  .add('showLoadingAnimation', () => <Media showLoadingAnimation />);
