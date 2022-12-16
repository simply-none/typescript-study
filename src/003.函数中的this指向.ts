// 函数内部的this定义在函数的第一个形参上
// this的类型有调用该函数的类型决定的，比如下面是由obj调用，则指向obj的类型ObjT
function getLength(this: ObjI, name: string) {
  this.myName = name
  console.log(this)
}

interface ObjI {
  myName: string
  getLength: (p: string) => void
}

let obj: ObjI = {
  myName: 'jade qiu',
  getLength() {},
}
obj.getLength = getLength

obj.getLength('charslnzing')
