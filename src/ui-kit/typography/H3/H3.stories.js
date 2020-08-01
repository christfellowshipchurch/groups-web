import React from 'react';
import { storiesOf } from '@storybook/react';

import H3 from '.';

storiesOf('ui-kit/typography/H3', module)
  .add('default', () => (
    <H3>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H3>
  ))
  .add('isLoading', () => (
    <H3 isLoading showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H3>
  ))
  .add('withMargins', () => <H3 withMargins>Padded Heading Big and Long</H3>)
  .add('withMargins + isLoading', () => (
    <H3 isLoading withMargins showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H3>
  ));
