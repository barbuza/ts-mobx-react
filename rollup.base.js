import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeBuiltins from 'rollup-plugin-node-builtins';

export default {
  format: 'iife',
  plugins: [
    nodeResolve({ jsnext: true, main: true }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'react-dom/server': ['renderToStaticMarkup'],
        'react': ['createElement', 'Component']
      }
    }),
    nodeBuiltins()
  ]
};
