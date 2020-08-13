import React from 'react';
import styled, { css } from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

import { withOverrides } from '../../theme';
import { getIsLoading } from '../../isLoading';

const sizeUnitConverter = css`
  ${({ size, theme }) =>
    typeof size === 'string' // this allows size to be a percent if necessary
      ? size
      : theme.sizing.baseUnit(size)};
`;

const StyledMedia = styled.mark.attrs(
  withOverrides('uiKit.Placeholder.Media.StyledMedia', () => ({
    // `custom-placeholder` class enables the `showLoadingAnimation` prop to work
    className: 'media custom-placeholder',
  }))
)`
  background: ${({ theme }) => theme.colors.background.inactive};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.sizing.baseBorderRadius};
  display: block;
  width: ${sizeUnitConverter};
  padding-top: ${sizeUnitConverter};

  /* Styles passed via the style prop and/or overrides */
  ${({ $style }) => $style}
`;

const Media = getIsLoading(({ isLoading, size, style, ...props }) => (
  <ReactPlaceholder
    customPlaceholder={<StyledMedia size={size} $style={style} />}
    ready={!isLoading}
    {...props}
  />
));

Media.defaultProps = {
  isLoading: false,
  size: '100%',
};

Media.propTypes = {
  isLoading: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

Media.displayName = 'ui-kit.Placeholder.Media';

export default styled(Media).attrs(
  withOverrides('uiKit.Placeholder.StyledMedia')
)``;
