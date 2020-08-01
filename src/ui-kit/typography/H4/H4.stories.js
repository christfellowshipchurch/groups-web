import React from 'react';
import { storiesOf } from '@storybook/react';

import H4 from '.';

storiesOf('ui-kit/typography/H4', module)
  .add('default', () => (
    <H4>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H4>
  ))
  .add('isLoading', () => (
    <H4 isLoading showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H4>
  ))
  .add('withMargins', () => <H4 withMargins>Padded Heading Big and Long</H4>)
  .add('withMargins + isLoading', () => (
    <H4 isLoading withMargins showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H4>
  ));
