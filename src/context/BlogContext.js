import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
}