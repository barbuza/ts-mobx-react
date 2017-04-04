import base from './rollup.base';

export default Object.assign({}, base, {
  entry: 'lib/server.js',
  dest: 'dist/server-bundle.js',
});
