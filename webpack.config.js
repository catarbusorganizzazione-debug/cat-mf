const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, 'tsconfig.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'defaultName',
    publicPath: 'http://localhost:4204/',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module' },
      name: 'defaultName',
      filename: 'remoteEntry.js',
      exposes: {
        './Cat': './src/app/app-routing.module.ts',
      },
      shared: share({
        '@angular/core': {
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
        '@ngrx/store': {
          requiredVersion: 'auto',
          singleton: true,
        },
        '@ngrx/effects': {
          requiredVersion: 'auto',
          singleton: true,
        },
      }),
    }),
  ],
};
