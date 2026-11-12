import React, { createContext, useContext, useState, useEffect } from 'react';
import { pkConfig } from '../data/regions/pk';

const RegionContext = createContext({
  region: pkConfig,
  isPakistan: true,
  setRegionByPath: () => {},
});

export function RegionProvider({ children }) {
  // Always default to Pakistan
  const [region, setRegion] = useState(pkConfig);

  const setRegionByPath = () => {
    setRegion(pkConfig);
  };

  useEffect(() => {
    // Update document title dynamically
    if (typeof document !== 'undefined') {
      document.title = pkConfig.siteTitle;
    }
  }, [region]);

  return (
    <RegionContext.Provider value={{
      region,
      isPakistan: true,
      setRegionByPath
    }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}
