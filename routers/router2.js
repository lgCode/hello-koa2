const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

let home = new Router();
home.get('/aa', async (ctx) => {
    ctx.body = 'Hi aa';
}).get("/bb", async (ctx) => {
    ctx.body = 'Hi bb todo';
});

let user = new Router();
user.get('/cc', async (ctx) => {
    ctx.body = 'Hi cc';
}).get("/dd", async (ctx) => {
    ctx.body = 'Hi dd todo';
});

let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());

//加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
});