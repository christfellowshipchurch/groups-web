import React from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

import 'react-placeholder/lib/reactPlaceholder.css';

const StyledMedia = styled.mark.attrs({
  // `rect-shape` comes from ReactPlaceholder and enables it's `showLoadingAnimation` to work
  className: 'ui-kit.Placeholder.Media rect-shape',
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