import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import SimpleBottomNavigation from '../components/SimpleBottomNavigation';
import '../styles/global.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  firstIndex: 1
}

export default function MyApp(props: MyAppProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const navHandler = (index: number) => {
    setSelectedIndex(index)
    console.log(index)
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        {/* <SimpleBottomNavigation selectedIndex={selectedIndex} changeNavHandler={navHandler}></SimpleBottomNavigation> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
