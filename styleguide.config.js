const vueLoader = require('vue-loader');

module.exports = {
  title: 'Daily Programming Challange',
  components: 'src/components/**/Day*.vue',
  require: ['./prism-vsc.css'],
  jssThemedEditor: false,
  defaultExample: false,
  progressBar: true,
  styles: {
    Editor: {
      root: {
        isolate: false,
      },
    },
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [new vueLoader.VueLoaderPlugin()],
  },
  usageMode: 'expand',
  exampleMode: 'expand',
};
