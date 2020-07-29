import React from 'react';
import { storiesOf } from '@storybook/react';

import H6 from '.';

storiesOf('ui-kit/typography/H6', module)
  .add('default', () => (
    <H6>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H6>
  ))
  .add('padded', () => <H6 padded>Padded Heading Big and Long</H6>)
  .add('isLoading', () => (
    <H6 isLoading showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H6>
  ));
