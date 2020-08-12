import React from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

import { withOverrides } from '../../theme';

const StyledLine = styled.mark.attrs(
  withOverrides('uiKit.Placeholder.Line.StyledLine', () => ({
    // `custom-placeholder` class enables the `showLoadingAnimation` prop to work
    className: 'custom-placeholder',
  }))
)`
  background: ${({ theme }) => theme.colors.background.inactive};
  border-radius: ${({ theme }) => theme.sizing.baseBorderRadius};
  display: block;
  height: 1rem;
  width: ${({ $width }) => $width};

  /* Styles passed via the style prop and/or overrides */
  ${({ $styles }) => $styles}
`;

const Line = ({ isLoading, style, width, ...props }) => (
  <ReactPlaceholder
    customPlaceholder={<StyledLine $styles={style} $width={width} />}
    ready={!isLoading}
    {...props}
  />
);

Line.defaultProps = {
  isLoading: false,
};

Line.propTypes = {
  isLoading: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  width: PropTypes.string,
};

Line.displayName = 'ui-kit.Placeholder.Line';

export default styled(Line).attrs(withOverrides('uiKit.Placeholder.Line'))``;
