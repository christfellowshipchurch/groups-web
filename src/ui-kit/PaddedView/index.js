// import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const PaddedView = styled.div.attrs({
  className: 'ui-kit.PaddedView',
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

PaddedView.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
};

PaddedView.defaultProps = {
  horizontal: true,
  vertical: true,
};

export default PaddedView;
