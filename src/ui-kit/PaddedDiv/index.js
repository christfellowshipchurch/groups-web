// import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const PaddedDiv = styled.div.attrs({
  className: 'ui-kit.PaddedDiv',
})`
  padding-top: ${({ theme, vertical }) =>
    vertical ? theme.sizing.baseUnit(1) : 0};
  padding-right: ${({ theme, horizontal }) =>
    horizontal ? theme.sizing.baseUnit(1) : 0};
  padding-bottom: ${({ theme, vertical }) =>
    vertical ? theme.sizing.baseUnit(1) : 0};
  padding-left: ${({ theme, horizontal }) =>
    horizontal ? theme.sizing.baseUnit(1) : 0};
`;

PaddedDiv.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

PaddedDiv.defaultProps = {
  horizontal: true,
  vertical: true,
};

export default PaddedDiv;
