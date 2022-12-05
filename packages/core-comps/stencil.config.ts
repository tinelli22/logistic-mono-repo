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
