import React from 'react';
import { storiesOf } from '@storybook/react';

import H5 from '.';

storiesOf('ui-kit/typography/H5', module)
  .add('default', () => (
    <H5>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H5>
  ))
  .add('padded', () => <H5 padded>Padded Heading Big and Long</H5>)
  .add('isLoading', () => (
    <H5 isLoading showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H5>
  ));
