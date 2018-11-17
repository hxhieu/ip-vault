var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

var app = new Koa();
var router = new Router();

var IpLookup = require('./data/ip-lookup');

router.post('/ip', async (ctx, next) => {
  try {
    await IpLookup.insert(ctx.request.body);
    ctx.status = 200;
    ctx.body = null;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
  }

  await next();
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

console.log('Server started and listening at port 3000...');
app.listen(3000);
