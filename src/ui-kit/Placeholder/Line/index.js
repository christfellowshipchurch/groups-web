import React from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

const StyledLine = styled.mark.attrs({
  // `custom-placeholder` class enables the `showLoadingAnimation` prop to work
  className: 'ui-kit-Placeholder-Line custom-placeholder',
})`
  background: ${({ theme }) => theme.colors.background.inactive};
  border-radius: ${({ theme }) => theme.sizing.baseBorderRadius};
  display: block;
  height: 1rem;
  width: ${({ customWidth }) => customWidth};

  ${({ customStyles }) => customStyles}
`;

const Line = ({ isLoading, style, width, ...props }) => (
  <ReactPlaceholder
    customPlaceholder={<StyledLine customStyles={style} customWidth={width} />}
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
  style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  width: PropTypes.string,
};

Line.displayName = 'ui-kit.Placeholder.Line';

export default Line;
