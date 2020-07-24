const theme = {
  colors: {
    primary: 'salmon',
    background: {
      paper: '#FFFFFF',
      inactive: '#A5A5A5',
    },
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
};

export default theme;
