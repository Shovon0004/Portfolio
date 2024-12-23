import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <DarkModeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </DarkModeContext.Provider>
    );
}

// Add prop-types validation
DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is passed and renderable
};

export function useDarkMode() {
    return useContext(DarkModeContext);
}
