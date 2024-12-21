import React from "react";

const withSpinner = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withSpinner;
