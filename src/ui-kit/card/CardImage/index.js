import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from '../../Image';
import { getIsLoading } from '../../isLoading';
import { Media } from '../../Placeholder';
import { withOverrides } from '../../theme';

const Placeholder = styled(Media)`
  border-radius: ${({ theme }) =>
    `${theme.sizing.baseBorderRadius} ${theme.sizing.baseBorderRadius} 0 0`};
`;

const StyledImage = styled(Image).attrs(
  withOverrides('ui-kit.card.CardImage.StyledImage')
)``;

const CardImage = getIsLoading(({ isLoading, ...props }) => (
  <Placeholder isLoading={isLoading} showLoadingAnimation>
    <StyledImage {...props} />
  </Placeholder>
));

CardImage.propTypes = {
  isLoading: PropTypes.bool,
};

CardImage.displayName = 'ui-kit.card.CardImage';

export default CardImage;
