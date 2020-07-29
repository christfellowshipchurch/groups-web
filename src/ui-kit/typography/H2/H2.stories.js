import React from 'react';
import { storiesOf } from '@storybook/react';

import H2 from '.';

storiesOf('ui-kit/typography/H2', module)
  .add('Default', () => (
    <H2>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H2>
  ))
  .add('padded', () => <H2 padded>Padded Heading Big and Long</H2>)
  .add('isLoading', () => (
    <H2 isLoading showLoadingAnimation>
      {
        '"God is most glorified in us when we are most satisfied in Him" ― John Piper'
      }
    </H2>
  ));
