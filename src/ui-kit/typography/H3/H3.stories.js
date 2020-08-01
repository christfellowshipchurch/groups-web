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
  .add('padded', () => <H3 padded>Padded Heading Big and Long</H3>)
  .add('padded + isLoading', () => (
    <H3 isLoading padded showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H3>
  ));
