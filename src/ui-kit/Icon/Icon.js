import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// importing from lodash this way allows for tree shaking!
import camelCase from 'lodash/camelCase';
import flow from 'lodash/flow';
import kebabCase from 'lodash/kebabCase';
import upperFirst from 'lodash/upperFirst';

import { getIsLoading } from '../isLoading';
import { Media } from '../Placeholder';
import * as uikitIcons from '../theme/icons';

import { IconContext } from './IconProvider';

/* Convenience component to render icons based on the icon's string name, like:
 *
 * <Icon name="skip-next" {...allOtherPropsPassedToComponent} />
 *
 * Can also import the icon directly:
 *
 * import { SkipNext } from '../theme/icons';
 * <SkipNext /> */

const IconComponent = styled(uikitIcons.Umbrella)`
  fill: ${({ theme }) => theme.colors.text.primary};
  height: auto;
  width: ${({ $size, theme }) =>
    typeof $size === 'string' // this allows size to be a percent if necessary
      ? $size
      : theme.sizing.baseUnit($size)};
`;

const pascalCase = (string) => flow(camelCase, upperFirst)(string);

const Icon = getIsLoading(({ name, isLoading, size, ...otherProps }) => {
  const iconInput = useContext(IconContext);

  const Icons = { ...uikitIcons, ...iconInput };

  return (
    <Media size={size} isLoading={isLoading}>
      <IconComponent
        as={Icons[pascalCase(name)]}
        $size={size}
        {...otherProps}
      />
    </Media>
  );
});

// eslint-disable-next-line consistent-return
const namePropValidator = (props, propName, componentName) => {
  const icons = Object.keys({ ...uikitIcons, ...props.iconInput }).map(
    kebabCase
  );

  if (!icons.includes(props.name)) {
    // eslint-disable-next-line no-console
    return new Error(
      `Invalid prop \`${propName}\` of value \`${
        props.name
      }\` supplied to \`${componentName}\` expected one of ${JSON.stringify(
        icons
      )}`
    );
  }
};

Icon.propTypes = {
  name: namePropValidator,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  isLoading: PropTypes.bool,
};

Icon.defaultProps = {
  size: 2, // 2 === 2 baseUnit === 2rem === 32 is the default size used within the svg component.
};

Icon.displayName = 'Icon';

export default Icon;
