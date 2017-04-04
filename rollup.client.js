import base from './rollup.base';

export default Object.assign({}, base, {
  entry: 'lib/client.js',
  dest: 'dist/client-bundle.js',
});
