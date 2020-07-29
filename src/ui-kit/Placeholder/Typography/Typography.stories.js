import React from 'react';
import { storiesOf } from '@storybook/react';

import { H1, H2 } from '../../typography';

import Typography from '.';

storiesOf('ui-kit/Placeholder/Typography', module)
  .add('default', () => (
    <>
      <Typography typographicClassName={'h1'}>
        <H1>Boom</H1>
      </Typography>
      <Typography typographicClassName={'h1'}>
        <H2>Boom</H2>
      </Typography>
    </>
  ))
  .add('isLoading (false)', () => (
    <Typography isLoading={false}>
      <H1>Boom</H1>
    </Typography>
  ));
