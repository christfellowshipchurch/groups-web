import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { withIsLoading } from '../../isLoading';

const StyledCard = styled.div`
  /* card styles */
  background: ${({ cardColor, theme }) =>
    cardColor ||
    theme.colors.background.paper ||
    undefined}; /* bail out if no bg color */
  border-radius: ${({ theme }) => theme.sizing.baseBorderRadius}px;
  ${({ inHorizontalList, theme }) =>
    inHorizontalList
      ? `
        /* provides spacing between cards */
        margin: ${theme.sizing.baseUnit * 0.5}px;
        marginBottom: ${theme.sizing.baseUnit * 0.75}px;
      `
      : `
        margin: ${theme.sizing.baseUnit * 0.75}px ${theme.sizing.baseUnit}px;
      `}
  ${({ theme }) => theme.shadows.default};
`;

const Card = ({ children, ...otherProps }) => (
  <StyledCard {...otherProps}>{children}</StyledCard>
);

Card.propTypes = {
  cardColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
