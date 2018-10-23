const HtmlWebpackPlugin = require('html-webpack-plugin');

class HtmlWebpackAdditionalTemplatePlugin {
  apply(compiler) {
    const plugins = compiler.options.plugins;

    plugins.map(plugin => {
      if (
        plugin.constructor.name === 'HtmlWebpackPlugin' &&
        plugin.options.additionalTemplate
      ) {
        const commonOptions = Object.assign({}, plugin.options);
        delete commonOptions.additionalTemplate;

        plugin.options.additionalTemplate.map(data => {
          compiler.apply(
            new HtmlWebpackPlugin(
              Object.assign({}, commonOptions, {
                filename: data.filename,
                template: data.template
              })
            )
          );
        });

        delete plugin.options.additionalTemplate;
      }
    });
  }
}

module.exports = HtmlWebpackAdditionalTemplatePlugin;
