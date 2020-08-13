import React from 'react';
import renderer from 'react-test-renderer';
import { kebabCase } from 'lodash';
import 'jest-styled-components';

import Providers from '../../Providers';

import * as icons from '../theme/icons';

import Icon from '.';

Object.keys(icons).forEach((iconName) => {
  describe(`The ${iconName} icon`, () => {
    it('should render', () => {
      const tree = renderer.create(
        <Providers>
          <Icon name={kebabCase(iconName)} />
        </Providers>
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
