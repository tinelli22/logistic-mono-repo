import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'core-comps',
  outputTargets: [
    react({
      componentCorePackage: 'core-comps',
      proxiesFile: '../app/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: false,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: './src/components/atoms/log-icon/assets/*',
          dest: './dist/collection/components/atoms/log-icon/assets/*',
          warn: true
        }
      ]
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        './src/global/styles/index.scss'
      ],
    })
  ]
};
