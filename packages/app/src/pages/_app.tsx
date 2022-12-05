
import type { AppProps } from 'next/app'

import { applyPolyfills, defineCustomElements } from 'core-comps/loader';
import 'core-comps/dist/collection/assets/styles/icons.css';

applyPolyfills().then(() => {
  const win = typeof window !== "undefined" && window
  if(win) defineCustomElements(win);
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
