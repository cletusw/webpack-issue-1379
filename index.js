const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const app = express();

app.use(webpackMiddleware(webpack(config), {
  publicPath: '',
}));

app.listen(3000);
