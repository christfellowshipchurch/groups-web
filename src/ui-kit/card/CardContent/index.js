import styled from 'styled-components';

import PaddedDiv from '../../PaddedDiv';

const CardContent = styled(PaddedDiv).attrs({
  className: 'ui-kit.card.CardContent',
})`
  padding: ${({ theme }) =>
    `${theme.sizing.baseUnit(1.5)} ${theme.sizing.baseUnit(2)}`};
`;

export default CardContent;
