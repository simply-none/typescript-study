"use strict";
// 函数定义三种形式
// 可选参数
function printParams(a, b) {
    console.log(a, b);
}
// 参数默认值
function printParams2(a, b = 3) {
    console.log(a, b);
}
// 剩余参数
function printParams3(a, ...b) {
    console.log(a, b);
}
printParams(1);
printParams2(1);
printParams3(1, 2, 3, 4, 5);
//# sourceMappingURL=001.%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89.js.map