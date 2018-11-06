/* eslint-env jest */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackAdditionalTemplatePlugin = require('../');

const OUTPUT_DIR = path.join(__dirname, './dist');

describe('HtmlWebpackAdditionalTemplatePlugin', () => {
  beforeEach(done => {
    rimraf(OUTPUT_DIR, done);
  });

  it('generate multiple HTML files', done => {
    webpack(
      {
        entry: path.join(__dirname, 'fixtures', 'entry.js'),
        output: {
          path: OUTPUT_DIR
        },
        plugins: [
          new HtmlWebpackPlugin({
            additionalTemplate: [
              {
                filename: 'second.html',
                template: path.join(__dirname, 'fixtures/test.html')
              },
              {
                filename: 'third.html',
                template: path.join(__dirname, 'fixtures/test.html')
              }
            ]
          }),
          new HtmlWebpackAdditionalTemplatePlugin()
        ]
      },
      err => {
        expect(err).toBeFalsy();
        expect(
          fs.statSync(path.resolve(OUTPUT_DIR, 'index.html'))
        ).toBeTruthy();
        expect(
          fs.statSync(path.resolve(OUTPUT_DIR, 'second.html'))
        ).toBeTruthy();
        expect(
          fs.statSync(path.resolve(OUTPUT_DIR, 'third.html'))
        ).toBeTruthy();
        done();
      }
    );
  });
});
