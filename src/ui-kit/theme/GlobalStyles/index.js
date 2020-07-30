import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { h2Style } from '../../typography/H2';
import { h3Style } from '../../typography/H3';
import { h4Style } from '../../typography/H4';
import { h5Style } from '../../typography/H5';
import { h6Style } from '../../typography/H6';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary}
    text-shadow: none;
  }

  /* Individal typography styles are imported to and referenced from the global stylesheet. See
     typogrpahy components (/ui-kit/typography) for style definitions */
  ${h2Style}
  ${h3Style}
  ${h4Style}
  ${h5Style}
  ${h6Style}

  /* Copied from https://github.com/buildo/react-placeholder/blob/master/src/reactPlaceholder.scss
  to reduce technical complexity with importing css */
  .show-loading-animation {
    &.rect-shape,
    &.round-shape,
    &.text-row,
    &.custom-placeholder, /* We add a custom class for use in our placeholder components */
    .rect-shape,
    .round-shape,
    .text-row,
    .custom-placeholder { /* We add a custom class for use in our placeholder components */
      animation: react-placeholder-pulse 1.5s infinite;
    }
  }

  @keyframes react-placeholder-pulse {
    0% {
      opacity: .6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: .6;
    }
  }
`;

export default GlobalStyles;
