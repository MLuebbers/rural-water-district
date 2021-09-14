import { ThemeProvider } from '@emotion/react';
import theme from '../theme.js';

export default function FlaxApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={ theme }>
            <Component { ...pageProps } />
        </ThemeProvider>
    );
}

export function reportWebVitals(metric) {
    console.log(metric)
  }