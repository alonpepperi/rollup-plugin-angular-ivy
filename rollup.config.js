import buble from 'rollup-plugin-buble';

var external = Object.keys(require('./package.json').dependencies).concat(['colors', ,'fs', 'path', 'replace']);

export default {
  entry: 'src/index.js',
  plugins: [ buble() ],
  external: external,
  targets: [
    { dest: 'dist/rollup-plugin-angular-ivy.js', format: 'cjs' },
    { dest: 'dist/rollup-plugin-angular-ivy.esm.js', format: 'es' }
  ]
};
