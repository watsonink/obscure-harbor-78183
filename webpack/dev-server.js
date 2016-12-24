const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const configDev = require('./config.dev');
const { BUILD_DIR, SRC_DIR, HTML_DIR } = require('./constants');

const app = express();
app.use(express.static('public'));

const compiler = webpack(configDev);
app.use(webpackDevMiddleware(compiler, {
  publicPath: configDev.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}));
app.use(webpackHotMiddleware(compiler));

app.set('views', `${HTML_DIR}views`);
app.set('view engine', 'ejs');

app.get('/test', function(request, response) {
  response.render('pages/test');
});
app.get('/todos', function(request, response) {
  response.render('pages/todos');
});
app.get('/', function(request, response) {
  response.render('pages/index');
});


//process.env.PORT || 5000
app.listen(process.env.PORT || configDev.HOT_PORT, () => {
  console.info(`Development server is listening at port ${configDev.HOT_PORT} ${__dirname}.`); // eslint-disable-line
});
// app.listen(configDev.HOT_PORT, () => {
//   console.info(`Development server is listening at port ${configDev.HOT_PORT}.`); // eslint-disable-line
// });
