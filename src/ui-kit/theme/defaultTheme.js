// import { css } from 'styled-components';

const theme = {
  colors: {
    primary: '#00aeef',
    secondary: '#000',
    alert: '#d52158',
    success: '#1ec27f',
    warning: '#e09541',
    white: '#ffffff',
    black: '#000000',
    text: {
      primary: '#303030',
      secondary: '#505050',
      link: '#00aeef',
    },
    background: {
      paper: '#FFFFFF',
      screen: '#f6f6f6',
      inactive: '#A5A5A5',
    },
  },
  typography: {
    baseFontSize: 1,
    baseLineHeight: 1.44,
    fontFamily:
      'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
  },
  sizing: {
    baseUnit: (unit = 1) => `${unit}rem`,
    baseBorderRadius: '.3rem',
    avatar: {
      small: '40',
      medium: '80',
      large: '120',
    },
  },
  shadows: {
    default: '0 10px 9px -4px rgba(0,0,0,.07)',
  },
  helpers: {
    /*
     * Vertical rhythm method of spacing objects (typically typographic elements) based on a predefined
     * ratio. A popular ratio that is often used would be something like the Golden Ratio. With the
     * Golden Ratio as an example, all elment spacing on the page is a multiplied derivitive of that
     * ratio resulting in a rhthmic spacing. This is often used in typography to set line heights and
     * vertical paddings. The helper function below takes a `rem` unit (often a font size but not always)
     * and multiplies it by either a custom ratio or a derrived ratio from the themes `baseLineHeight`
     * devided by the `baseFontSize`.
     */
    verticalRhythm: (units, customRatio) => {
      const verticalRatio =
        customRatio ||
        theme.typography.baseLineHeight / theme.typography.baseFontSize;
      return `${verticalRatio * units}rem`;
    },
  },
  overrides: {
    // 'uiKit.typography.H1.StyledH1': {
    //   $style: {
    //     background: 'salmon',
    //   },
    //   love: 'Jesus',
    // },
    // 'uiKit.typography.H2.StyledH2': {
    //   $style: css`
    //     background: goldenrod;
    //   `,
    //   love: 'God',
    // },
    // 'uiKit.Placeholder.Line': {
    //   $style: css`
    //     background: salmon;
    //   `,
    // },
    // 'uiKit.Placeholder.Line.StyledLine': {
    //   $style: css`
    //     background: goldenrod;
    //   `,
    // },
  },
};

export default theme;
