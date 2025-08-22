// src/context/RefreshContext.jsx
import React, { createContext, useState, useContext } from "react";

const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = () => {
    setRefreshKey(prev => prev + 1); // changes key -> re-renders components
  };

  return (
    <RefreshContext.Provider value={{ refreshKey, refresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => useContext(RefreshContext);
