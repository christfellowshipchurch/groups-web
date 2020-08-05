import styled from 'styled-components';
import PropTypes from 'prop-types';

import { withOverrides } from '../theme';

const PaddedDiv = styled.div.attrs(withOverrides('ui-kit-PaddedDiv'))`
  padding: ${({ horizontal, theme, vertical }) => {
    const verticalValue = vertical ? theme.sizing.baseUnit(1) : 0;
    const horizontalValue = horizontal ? theme.sizing.baseUnit(1) : 0;

    return `${verticalValue} ${horizontalValue}`;
  }};
`;

PaddedDiv.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

PaddedDiv.defaultProps = {
  horizontal: true,
  vertical: true,
};

PaddedDiv.displayName = 'ui-kit.PaddedDiv';

export default PaddedDiv;
