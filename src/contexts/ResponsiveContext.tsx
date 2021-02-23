import React, { useContext, useState, useEffect } from 'react';
import { breakpoints } from 'libs/styled/theme';

type ResponsiveContextPropsT = {
  children: React.ReactNode;
};

type DevicesT = {
  isDesktop: boolean;
  isMobile: boolean;
  isTouch: boolean;
};

const defaultValue: DevicesT = {
  isDesktop: false,
  isMobile: false,
  isTouch: false,
};

const ResponsiveContext = React.createContext<DevicesT>(defaultValue);

const ResponsiveProvider: React.FC<ResponsiveContextPropsT> = ({
  children,
}) => {
  const { desktop, tablet } = breakpoints;
  const [devices, setDevices] = useState(defaultValue);
  const [width, setScreenWidth] = useState(0);

  const checkDevices = () => {
    setScreenWidth(window.document.body.getBoundingClientRect().width);

    const output: DevicesT = {
      isDesktop: width >= desktop,
      isMobile: width < tablet,
      isTouch: width < desktop && width >= tablet,
    };

    setDevices(output);
  };

  useEffect(() => {
    if (!window) {
      return;
    }

    checkDevices();

    window.addEventListener('resize', () => {
      checkDevices();
    });

    return window.removeEventListener('resize', checkDevices);
  }, []);

  return (
    <ResponsiveContext.Provider value={devices}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;

export const useResponsive = () => useContext(ResponsiveContext);
