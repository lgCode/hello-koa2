const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
            <h1>Hello,Koa2! request POST</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postData = await parsePostData(ctx);
        ctx.body = postData;
    } else {
        ctx.body = "<h1>404!</h1>";
    }
});

function parsePostData (ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = '';
            ctx.req.addListener("data", (data) => {
                postdata += data;
            })
            ctx.req.on('end', function () {
                let parseData = parseQueryStr(postdata)
                resolve(parseData);
            })
        } catch (error) {
            reject(error)
        }
    })
}

function parseQueryStr (queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split('&'); //字符串转数组
    console.log(queryStrList);
    console.log(queryStrList.entries());
    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}


app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})