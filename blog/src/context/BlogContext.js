import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value="Hi there!">{children}</BlogContext.Provider>
  );
};

export default BlogContext;
