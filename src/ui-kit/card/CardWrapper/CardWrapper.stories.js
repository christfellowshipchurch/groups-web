import React from 'react';
import { storiesOf } from '@storybook/react';

import CardWrapper from '.';

storiesOf('ui-kit/Card/CardWrapper', module)
  .addDecorator((story) => <div style={{ width: '50%' }}>{story()}</div>)
  .add('default', () => <CardWrapper>Boom!</CardWrapper>)
  .add('cardColor', () => {
    const styles = {
      paddingTop: '56.25%',
      width: '100%',
    };
    return <CardWrapper cardColor={'salmon'} style={styles} />;
  });
