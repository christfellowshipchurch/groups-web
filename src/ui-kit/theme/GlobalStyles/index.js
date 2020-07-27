import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
