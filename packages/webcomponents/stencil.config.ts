import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'webcomponents',
  outputTargets: [
    react({
      componentCorePackage: 'webcomponents',
      proxiesFile: '../app/src/components/webcomponents/index.ts',
      includeDefineCustomElements: false,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'assets',
          dest: 'assets',
          warn: true
        }
      ]
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
