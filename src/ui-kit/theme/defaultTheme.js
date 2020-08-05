import { css } from 'styled-components';

const theme = {
  colors: {
    primary: 'salmon',
    text: {
      primary: '#303030',
      secondary: '#505050',
    },
    background: {
      paper: '#FFFFFF',
      inactive: '#A5A5A5',
    },
  },
  typography: {
    baseFontSize: 1,
    baseLineHeight: 1.5,
    fontFamily:
      'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
  },
  sizing: {
    baseUnit: (unit = 1) => `${unit}rem`,
    baseBorderRadius: '16px',
    avatar: {
      small: '40',
      medium: '80',
      large: '120',
    },
  },
  shadows: {
    default: '0px 5px 18px rgba(0, 0, 0, 0.1)',
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
    'uiKit.typography.H1.StyledH1': {
      $style: {
        background: 'salmon',
      },
      love: 'Jesus',
    },
    'uiKit.typography.H2.StyledH2': {
      $style: css`
        background: goldenrod;
      `,
      love: 'God',
    },
  },
};

export default theme;
