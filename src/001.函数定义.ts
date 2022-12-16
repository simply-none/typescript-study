// 函数定义三种形式
// 可选参数
function printParams(a: number, b?: number): void {
  console.log(a, b)
}

// 参数默认值
function printParams2(a: number, b: number = 3): void {
  console.log(a, b)
}

// 剩余参数
function printParams3(a: number, ...b: number[]): void {
  console.log(a, b)
}

printParams(1)
printParams2(1)
printParams3(1, 2, 3, 4, 5)