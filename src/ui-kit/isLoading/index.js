import React, { useContext } from 'react';

// Create our IsLoadingContext
const IsLoadingContext = React.createContext(false);

/* Safely checks for isLoading to make it easy to build components that respond to either props or
 * context for rendering placeholder/loading state. */
const getIsLoading = (Component) => (props) => {
  // does the component have an isLoading property?
  if (Object.hasOwnProperty.call(props, 'isLoading')) {
    return <Component {...props} />;
  }

  // No? That's fine we'll pull it from context
  const isLoading = useContext(IsLoadingContext);

  return <Component isLoading={isLoading} {...props} />;
};

// Allows a component to accept an `isLoading` prop to pass down into context for it's children.
const withIsLoading = (Component) => ({ isLoading, ...props }) => (
  <IsLoadingContext.Provider value={isLoading}>
    <Component {...props} />
  </IsLoadingContext.Provider>
);

export { getIsLoading, IsLoadingContext, withIsLoading };
