import React from 'react';
import { storiesOf } from '@storybook/react';

import H4 from '.';

storiesOf('ui-kit/typography/H4', module)
  .add('Default', () => (
    <H4>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H4>
  ))
  .add('padded', () => <H4 padded>Padded Heading Big and Long</H4>)
  .add('isLoading', () => (
    <H4 isLoading showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H4>
  ));
