import React from 'react';
import PropTypes from 'prop-types';

// Create our IconContext for icon overrides
const IconContext = React.createContext({});

// Accept iconInput as a prop and pass it to the context provider
const IconProvider = ({ children, iconInput, ...props }) => (
  <IconContext.Provider value={iconInput} {...props}>
    {children}
  </IconContext.Provider>
);

IconProvider.propTypes = {
  children: PropTypes.node,
  iconInput: PropTypes.objectOf(PropTypes.func),
};

IconProvider.defaultProps = {
  iconInput: {},
};

export { IconContext, IconProvider as default };
