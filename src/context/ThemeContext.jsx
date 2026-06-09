import React, { createContext, useState, useContext } from 'react';

// 1. Creamos el contexto
const ThemeContext = createContext();

// 2. Creamos el Provider (el componente que va a envolver a los demás y proveer los datos)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado global del tema

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Creamos un pequeño Custom Hook para consumir este contexto más fácil
export const useTheme = () => {
  return useContext(ThemeContext);
};