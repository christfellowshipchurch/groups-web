import React from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

const StyledMedia = styled.mark.attrs({
  // `custom-placeholder` class enables the `showLoadingAnimation` prop to work
  className: 'ui-kit-Placeholder-Media custom-placeholder',
})`
  background: ${({ theme }) => theme.colors.background.inactive};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.sizing.baseBorderRadius};
  display: block;
  height: ${({ size }) => size};
  width: ${({ size }) => size};

  ${({ customStyle }) => customStyle}
`;

const Media = ({ isLoading, size, style, ...props }) => (
  <ReactPlaceholder
    customPlaceholder={<StyledMedia size={size} customStyle={style} />}
    ready={!isLoading}
    {...props}
  />
);

Media.defaultProps = {
  isLoading: true,
  size: '100%',
};

Media.propTypes = {
  isLoading: PropTypes.bool,
  size: PropTypes.string,
  style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

Media.displayName = 'ui-kit.Placeholder.Media';

export default Media;
