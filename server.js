var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

var app = new Koa();
var router = new Router();

router.post('/ip', async (ctx, next) => {
  // ctx.router available
  console.log(ctx.request.body);
  ctx.status = 200;
  ctx.body = null;
  await next();
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

console.log('Server started and listening at port 3000...');
app.listen(3000);
