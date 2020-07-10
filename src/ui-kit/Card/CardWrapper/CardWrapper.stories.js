import React from 'react';
import { storiesOf } from '@storybook/react';

import CardWrapper from '.';

storiesOf('ui-kit/Card/CardWrapper', module)
  .add('Default', () => <CardWrapper>Boom!</CardWrapper>)
  .add('With backgroundColor', () => {
    const cardDimensions = {
      height: 400,
      width: '92%',
    };

    return (
      <CardWrapper style={cardDimensions} cardColor={'salmon'}>
        Boom!
      </CardWrapper>
    );
  });
