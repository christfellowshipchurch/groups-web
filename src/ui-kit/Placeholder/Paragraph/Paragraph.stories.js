import React from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from '.';

storiesOf('ui-kit/Placeholder/Paragraph', module)
  .add('default', () => <Paragraph />)
  .add('firstLineWidth', () => <Paragraph firstLineWidth={'23%'} />)
  .add('isLoading (false)', () => (
    <Paragraph isLoading={false}>Rendered child</Paragraph>
  ))
  .add('lastLineWidth', () => <Paragraph lastLineWidth={'33%'} />)
  .add('lineNumber', () => <Paragraph lineNumber={20} />)
  .add('showLoadingAnimation', () => <Paragraph showLoadingAnimation />)
  .add('style', () => <Paragraph style={{ background: 'salmon' }} />);
