
import type { AppProps } from 'next/app'

import { applyPolyfills, defineCustomElements } from 'webcomponents/loader';
import 'webcomponents/dist/collection/assets/styles/index.css';
import '../styles/globals.css';

applyPolyfills().then(() => {
  const win = typeof window !== "undefined" && window
  if(win) defineCustomElements(win);
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
