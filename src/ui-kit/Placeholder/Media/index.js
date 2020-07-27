import React from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

const StyledMedia = styled.mark.attrs({
  // `rect-shape` comes from ReactPlaceholder and enables it's `showLoadingAnimation` to work
  className: 'ui-kit.Placeholder.Media custom-placeholder',
})`
  background: ${({ theme }) => theme.colors.background.inactive};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.sizing.baseBorderRadius};
  display: block;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

const Media = ({ isLoading, size, ...props }) => (
  <ReactPlaceholder
    customPlaceholder={<StyledMedia size={size} />}
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
};

Media.displayName = 'ui-kit.Placeholder.Media';

export default Media;
