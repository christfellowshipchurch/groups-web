import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { withIsLoading } from '../../isLoading';

const Card = styled.div.attrs({
  className: 'ui-kit.Card.CardWrapper',
})`
  /* card styles */
  background: ${({ cardColor, theme }) =>
    cardColor ||
    theme.colors.background.paper ||
    `initial`}; /* bail out if no bg color */
  border-radius: ${({ theme }) => theme.sizing.baseBorderRadius}px;
  margin: ${({ inHorizontalList, theme }) =>
    inHorizontalList
      ? `${theme.sizing.baseUnit(0.5)}
      ${theme.sizing.baseUnit(0.5)}
      ${theme.sizing.baseUnit(0.75)}`
      : `${theme.sizing.baseUnit(0.75)} ${theme.sizing.baseUnit(1)}`};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

Card.propTypes = {
  cardColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
