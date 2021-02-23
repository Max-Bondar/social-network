import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';
import { GlobalStyles, Fonts, createTheme } from 'libs/styled';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer, Main } from 'components';
import { useThemeMode } from 'hooks';
import AuthProvider from 'contexts/AuthContext';
import ResponsiveProvider from 'contexts/ResponsiveContext';

const App: React.FC = () => {
  const { themeMode, themeToggler } = useThemeMode();
  const theme = createTheme(themeMode);

  return (
    <AuthProvider>
      <ResponsiveProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <BrowserRouter>
              <Fonts />
              <GlobalStyles />
              <SkeletonTheme
                color={theme.color.layoutSkeleton}
                highlightColor={theme.color.other0}
              >
                <Header onSwitchTheme={themeToggler} />
                <Main />
                <Footer />
              </SkeletonTheme>
            </BrowserRouter>
          </ToastProvider>
        </ThemeProvider>
      </ResponsiveProvider>
    </AuthProvider>
  );
};

export default App;
