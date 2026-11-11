import React, { createContext, useContext, useState, useEffect } from 'react';
import { globalConfig } from '../data/regions/global';
import { pkConfig } from '../data/regions/pk';

const RegionContext = createContext({
  region: globalConfig,
  isPakistan: false,
  setRegionByPath: () => {},
});

export function RegionProvider({ children }) {
  const [region, setRegion] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/pk')) {
        return pkConfig;
      }
    }
    return globalConfig;
  });

  const setRegionByPath = (pathname) => {
    const cleanPath = pathname.toLowerCase();
    if (cleanPath.startsWith('/pk')) {
      setRegion(pkConfig);
    } else {
      setRegion(globalConfig);
    }
  };

  useEffect(() => {
    // Update document title dynamically based on active region
    if (typeof document !== 'undefined') {
      document.title = region.siteTitle;
    }
  }, [region]);

  return (
    <RegionContext.Provider value={{
      region,
      isPakistan: region.regionCode === 'pk',
      setRegionByPath
    }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}

