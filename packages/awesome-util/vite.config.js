const path = require('path');
const { defineConfig } = require('vite');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'AwesomeUtil',
      fileName: (format) => `awesome-util.${format}.js`,
    }
  }
});