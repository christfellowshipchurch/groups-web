import { css } from 'styled-components';

const withOverrides = (themeOverrides, componentProps) => {
  // Handle theme override values (styles/props). These have higher precedence.
  let mergedStyles = {};
  if (themeOverrides?.style || componentProps?.$style) {
    mergedStyles = {
      // Assign `style` prop values to a styled component transient prop `$style`. Order matters.
      $style: css`
        /* If a component using withOverrides is mapping it's style prop to a transient $style
         * to avoid inline styles we want to assign it first. These have lower presedence. */
        ${componentProps?.$style};
        /* If the themeOverrides includes style it goes second added to or replaced the line above. */
        ${themeOverrides?.style};
      `,
    };
  }

  return {
    ...componentProps, // These go first. Order matters. Lower presedence.
    ...themeOverrides, // These are second and add or override any previousely set values from the line above.
    ...mergedStyles,
  };
};

export default withOverrides;

// import React, { memo } from 'react';
// import { get } from 'lodash';

// import PropTypes from 'prop-types';
// import { compose, mapProps, getContext, hoistStatics } from 'recompose';
// import mergeStyles from '../styled/mergeStyles';
// import { THEME_PROPS } from './createTheme';

// const DEFAULT_MAPPER_FN = ({ theme } = {}) => ({ theme });

// export default function (mapperFn = DEFAULT_MAPPER_FN, overrideID) {
//   return hoistStatics(
//     compose(
//       getContext({
//         theme: PropTypes.shape(THEME_PROPS),
//       }),
//       mapProps(({ theme, ...otherProps }) => {
//         const themeOverridesValue = overrideID
//           ? get(theme, `overrides['${overrideID}']`, {})
//           : {};
//
//         const themeOverrides =
//           typeof themeOverridesValue === 'function'
//             ? themeOverridesValue(otherProps)
//             : themeOverridesValue;
//
//         const withThemeProps = mapperFn({ theme, ...otherProps });
//
//         let mergedOverides = {};
//         // We need to deep merge te style props. Other nested props are not currently merged
//         if (themeOverrides.style && withThemeProps.style) {
//           const mergedStyles = mergeStyles(
//             withThemeProps.style,
//             themeOverrides.style
//           );
//           mergedOverides = { style: mergedStyles };
//         }
//
//         return {
//           ...otherProps,
//           ...withThemeProps,
//           ...themeOverrides,
//           ...mergedOverides,
//         };
//       })
//     )
//   );
// }

// const withOverrides = (mapperFn = DEFAULT_MAPPER_FN, overrideID) => (
//   Component
// ) =>
//   styled(Component).attrs(({ theme, ...otherProps }) => {
//     const themeOverridesValue = overrideID
//       ? get(theme, `overrides['${overrideID}']`, {})
//       : {};
//
//     const themeOverrides =
//       typeof themeOverridesValue === 'function'
//         ? themeOverridesValue(otherProps)
//         : themeOverridesValue;
//
//     const withOverridesProps = mapperFn({ theme, ...otherProps });
//
//     // console.log(withOverridesProps);
//
//     let styleOverrides = {};
//     if (themeOverrides.style || withOverridesProps.style) {
//       styleOverrides = { ...get(themeOverrides, 'style', {}) };
//
//       // delete withOverridesProps.style;
//       // delete themeOverrides.style;
//     }
//
//     return {
//       ...otherProps,
//       ...withOverridesProps,
//       ...themeOverrides,
//       styleOverrides,
//     };
//   })`
//     ${({ styleOverrides }) => styleOverrides}
//   `;
//
// export default withOverrides;
