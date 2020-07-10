import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { withIsLoading } from '../../isLoading';

const StyledCard = styled.div`
  /* card styles */
  backgroundcolor: ${({ cardColor, theme }) =>
    cardColor ||
    theme.colors.background.paper ||
    undefined}; /* bail out if no bg color */
  borderradius: ${({ theme }) => theme.sizing.borderRadius};
  ${({ inHorizontalList }) =>
    inHorizontalList
      ? `
        /* provides spacing between cards also fixes android shadow needing "space" to render into */
        margin: 8px,
        marginBottom: 12px,
      `
      : `
        marginHorizontal: 16px,
        marginVertical: 12px,
      `},;
  ${({ theme }) => theme.shadows.default};
`;

const Card = ({ children, forceRatio, ...otherProps }) => (
  <StyledCard forceRatio={forceRatio} {...otherProps}>
    {children}
  </StyledCard>
);

Card.propTypes = {
  cardColor: PropTypes.string,
  children: PropTypes.node,
  forceRatio: PropTypes.number,
  style: PropTypes.any, // eslint-disable-line
};

export default Card;
