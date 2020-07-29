import React, { useRef } from 'react';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

import Line from '../Line';

// const boom = ({ theme, typographicStyles }) => {
//   const lineHeightIndex = typographicStyles.findIndex(
//     (part) => typeof part === 'string' && part.includes('line-height') // Ship it!
//   );
//
//   return typographicStyles[lineHeightIndex + 1]({ theme });
// };

// const TypographyLine = styled.default(Line).attrs({
//   className: 'h1 ui-kit Placeholder TypographyLine',
// })` height: ${boom}`;

const Typography = ({ children, isLoading, ...props }) => {
  const ref = useRef(children);

  return (
    <ReactPlaceholder
      customPlaceholder={
        <Line
          className={`${ref?.current?.type?.target} ui-kit-Placeholder-TypographyLine`}
        />
      }
      ready={!isLoading}
      {...props}
    >
      {children}
    </ReactPlaceholder>
  );
};

Typography.propTypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool,
};

Typography.defaultProps = { isLoading: true };

Typography.displayName = 'ui-kit.Placeholder.Typography';

export default Typography;
