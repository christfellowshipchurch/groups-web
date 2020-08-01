import React from 'react';
import { storiesOf } from '@storybook/react';

import Media from '.';

storiesOf('ui-kit/Placeholder/Media', module)
  .addDecorator((story) => (
    <div style={{ width: '50vw', height: '50vw' }}>{story()}</div>
  ))
  .add('default', () => <Media />)
  .add('isLoading (false)', () => (
    <Media isLoading={false}>Rendered Child</Media>
  ))
  .add('size', () => <Media size={'50%'} />)
  .add('style', () => <Media style={{ background: 'salmon' }} />)
  .add('showLoadingAnimation', () => <Media showLoadingAnimation />);
