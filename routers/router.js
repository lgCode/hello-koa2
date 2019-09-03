const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router({
    prefix: '/user',    //设置前缀
});

router.get("/", (ctx, next) => {
    ctx.body = 'Hello Bruce1G';
});
router.get('/todo', (ctx, next) => {
    ctx.body = "Todo page";
})


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('starting at port 3000');
});