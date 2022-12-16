"use strict";
// 函数内部的this定义在函数的第一个形参上
// this的类型有调用该函数的类型决定的，比如下面是由obj调用，则指向obj的类型ObjT
function getLength(name) {
    this.myName = name;
    console.log(this);
}
let obj = {
    myName: 'jade qiu',
    getLength() { },
};
obj.getLength = getLength;
obj.getLength('charslnzing');
//# sourceMappingURL=003.%E5%87%BD%E6%95%B0%E4%B8%AD%E7%9A%84this%E6%8C%87%E5%90%91.js.map