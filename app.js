const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  // 设置response的Content-Type:
  ctx.response.type = "text/html";
  // 设置response的内容:
  ctx.response.body = `<h1>Hello Koa2222!</h1>`;
})

app.listen(3000);
console.log('app started at port 3000...');

async function testAsync () {
  return 'Hello async';
}
const result = testAsync();
console.log(result);