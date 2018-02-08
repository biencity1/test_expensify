const path = require('path');
const serve = require('koa-static');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(serve(publicPath + '/'));



app.listen(port, () => {
   console.log('server is up!');
});