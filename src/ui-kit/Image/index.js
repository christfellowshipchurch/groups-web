import React from 'react';
import styled from 'styled-components';

import { withOverrides } from '../theme';
import { getIsLoading } from '../isLoading';
import Placeholder from '../Placeholder';

const StyledImage = styled.img.attrs(withOverrides('ui-kit.Image.StyledImage'))`
  width: 100%;
  height: auto;
`;

const Image = getIsLoading(({ isLoading, ...props }) => (
  <Placeholder.Media isLoading={isLoading} showLoadingAnimation>
    <StyledImage {...props} />
  </Placeholder.Media>
));

Image.displayName = 'ui-kit.card.CardImage';

export default Image;
