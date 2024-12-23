import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    // Update the <html> element class when dark mode changes
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

export function useDarkMode() {
    return useContext(DarkModeContext);
}
