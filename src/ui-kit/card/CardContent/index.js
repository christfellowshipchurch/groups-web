import styled from 'styled-components';

import PaddedDiv from '../../PaddedDiv';
import { withOverrides } from '../../theme';

const CardContent = styled(PaddedDiv).attrs(
  withOverrides('ui-kit.card.CardContent')
)`
  padding: ${({ theme }) =>
    `${theme.sizing.baseUnit(2)} ${theme.sizing.baseUnit(1.5)}`};
`;

CardContent.displayName = 'ui-kit.card.CardContent';

export default CardContent;
