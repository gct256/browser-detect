import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const pkg = require('./package.json')
const currentDevice = require('./node_modules/current-device/package.json')

const banner = `/*!
 * ${pkg.name} - ${pkg.version}
 * ${pkg.homepage}
 * License: MIT
 * ----
 * based on ${currentDevice.name} - ${currentDevice.version}
 * ${currentDevice.homepage}
 */
`

const plugins = [commonjs(), nodeResolve()]

const pluginsForBrowser = [
  ...plugins,
  babel({
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['>= 0%']
          }
        }
      ]
    ]
  })
]

const pluginsForNode = [
  ...plugins,
  babel({
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 8
          }
        }
      ]
    ]
  })
]

export default [
  {
    input: './src/forBrowser.js',
    plugins: pluginsForBrowser,
    output: {
      file: './dist/browser-detect.js',
      format: 'iife',
      name: 'browserDetect',
      banner
    }
  },
  {
    input: './src/forBrowser.js',
    plugins: [
      ...pluginsForBrowser,
      uglify.uglify({
        output: {
          comments: /^!/
        }
      })
    ],
    output: {
      file: './dist/browser-detect.min.js',
      format: 'iife',
      name: 'browserDetect',
      banner
    }
  },
  {
    input: './src/browser-detect.js',
    plugins: pluginsForNode,
    output: {
      file: './index.js',
      format: 'cjs'
    }
  },
  {
    input: './src/browser-detect.js',
    plugins: pluginsForNode,
    output: {
      file: './index.mjs',
      format: 'esm'
    }
  }
]
