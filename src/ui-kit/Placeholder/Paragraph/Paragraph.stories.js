import React from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from '.';

storiesOf('ui-kit/Placeholder/Paragraph', module)
  .add('default', () => <Paragraph>Rendered child</Paragraph>)
  .add('firstLineWidth', () => <Paragraph firstLineWidth={'23%'} isLoading />)
  .add('isLoading', () => <Paragraph isLoading />)
  .add('lastLineWidth', () => <Paragraph isLoading lastLineWidth={'33%'} />)
  .add('lineNumber', () => <Paragraph isLoading lineNumber={20} />)
  .add('showLoadingAnimation', () => (
    <Paragraph isLoading showLoadingAnimation />
  ))
  .add('style', () => <Paragraph isLoading style={{ background: 'salmon' }} />);
