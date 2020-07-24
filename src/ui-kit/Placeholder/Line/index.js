import React from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

const StyledLine = styled.mark.attrs({
  // `rect-shape` comes from ReactPlaceholder and enables it's `showLoadingAnimation` to work
  className: 'ui-kit.Placeholder.Line rect-shape',
})`
  background: ${({ theme }) => theme.colors.background.inactive};
  border-radius: ${({ theme }) => theme.sizing.baseBorderRadius};
  display: block;
  height: 1rem;
  width: ${({ width }) => width};
`;

const Line = ({ isLoading, width, ...props }) => (
  <ReactPlaceholder
    customPlaceholder={<StyledLine width={width} />}
    ready={!isLoading}
    {...props}
  />
);

Line.defaultProps = {
  isLoading: true,
  width: '100%',
};

Line.propTypes = {
  isLoading: PropTypes.bool,
  width: PropTypes.string,
};

Line.displayName = 'ui-kit.Placeholder.Line';

export default Line;
