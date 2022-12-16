"use strict";
// 注意此处的promise类型：Promise<T>
// 同时promise的类型，即是resolve返回值的类型
const p = new Promise((res, rej) => {
    res({
        data: {
            list: [],
            length: 12,
        },
        code: 1,
        msg: '请求成功',
    });
});
p.then((res) => {
    console.log(res);
});
//# sourceMappingURL=002.promise%E5%AE%9A%E4%B9%89.js.map