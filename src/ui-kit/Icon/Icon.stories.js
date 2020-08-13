import React from 'react';
import { storiesOf } from '@storybook/react';

import { kebabCase } from 'lodash';

import * as icons from '../theme/icons';

import Icon from '.';

const stories = storiesOf('ui-kit/Icon', module);

Object.keys(icons).forEach((iconName) => {
  stories.add(iconName, () => <Icon name={kebabCase(iconName)} />);
});

stories.add('isLoading', () => <Icon name={'umbrella'} isLoading />);
