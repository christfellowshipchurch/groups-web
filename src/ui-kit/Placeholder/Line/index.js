import React from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

/* An alternative way to write the same code with less lines but requires the use of `!important`
 * because the default styles for `ReactPlaceholder` `type`s are rendered as inline styles 😢 */
// const Line = styled(ReactPlaceholder).attrs((props) => ({
//   // `rect-shape` comes from ReactPlaceholder and enables it's `showLoadingAnimation` to work
//   className: 'ui-kit.Placeholder.Line rect-shape',
//   type: 'rect',
//   ready: !props.isLoading,
// }))`
//   background: ${({ theme }) => theme.colors.background.inactive} !important;
//   border-radius: ${({ theme }) => theme.sizing.baseBorderRadius};
//   display: block;
//   height: 1rem !important;
//   marigin: 0 !important;
//   width: ${({ width }) => width} !important;
// `;

const StyledLine = styled.mark.attrs({
  // `rect-shape` comes from ReactPlaceholder and enables it's `showLoadingAnimation` to work
  className: 'ui-kit.Placeholder.Line custom-placeholder',
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
