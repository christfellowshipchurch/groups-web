import React from 'react';
import { storiesOf } from '@storybook/react';

import Media from '.';

storiesOf('ui-kit/Placeholder/Media', module)
  .addDecorator((story) => (
    <div style={{ width: '50vw', height: '50vw' }}>{story()}</div>
  ))
  .add('default', () => <Media>Rendered Child</Media>)
  .add('isLoading', () => <Media isLoading />)
  .add('size (50%)', () => <Media isLoading size={'50%'} />)
  .add('size (10)', () => <Media isLoading size={10} />)
  .add('style', () => <Media isLoading style={{ background: 'salmon' }} />)
  .add('showLoadingAnimation', () => <Media isLoading showLoadingAnimation />);
