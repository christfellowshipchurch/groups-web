import React from 'react';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';
import { times } from 'lodash';

import Line from '../Line';

const ParagraphLine = styled(Line).attrs({
  className: 'ui-kit-Placeholder-ParagraphLine',
})`
  height: 1rem;
  /* matches P component styles. line-height - font-size */
  margin: calc(${({ theme }) => theme.helpers.verticalRhythm(1)} - 1rem) 0;
`;

const Paragraph = ({
  isLoading,
  firstLineWidth,
  lastLineWidth,
  lineNumber,
  showLoadingAnimation,
  style,
  width,
  ...props
}) => (
  <ReactPlaceholder
    customPlaceholder={times(lineNumber, (i) => {
      let lineWidth = width;
      if (i === 0 && firstLineWidth) lineWidth = firstLineWidth;
      if (i === lineNumber - 1 && lastLineWidth) lineWidth = lastLineWidth;
      return (
        <ParagraphLine
          key={i}
          width={lineWidth}
          showLoadingAnimation={showLoadingAnimation}
          style={style}
        />
      );
    })}
    ready={!isLoading}
    {...props}
  />
);

Paragraph.defaultProps = {
  isLoading: true,
  lineNumber: 3,
  width: '100%',
  lastLineWidth: '75%',
  firstLineWidth: '85%',
};

Paragraph.propTypes = {
  firstLineWidth: PropTypes.string,
  lastLineWidth: PropTypes.string,
  isLoading: PropTypes.bool,
  lineNumber: PropTypes.number,
  showLoadingAnimation: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
  width: PropTypes.string,
};

export default Paragraph;
