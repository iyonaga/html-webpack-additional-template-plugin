# html-webpack-additional-template-plugin

A plugin for setting multiple HTML template simply

## Installation

```shell
npm install --save html-webpack-additional-template-plugin
```

## Usage
#### webpack.config.js
```javascript
const HtmlWebpackAdditionalTemplatePlugin = require('html-webpack-additional-template-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/views/index.html',
      additionalTemplate: [
        {
          filename: 'about/index.html',
          template: './src/views/about.html'
        },
        {
          filename: 'contact/index.html',
          template: './src/views/contact.html'
        }
      ]
    }),
    new HtmlWebpackAdditionalTemplatePlugin(),
  ]
}
```
