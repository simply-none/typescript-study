interface PromiseI {
  data: PromiseDataI
  code: number
  msg: string
}

interface PromiseDataI {
  list: { id: number; name: string }[]
  length: number
}

// 注意此处的promise类型：Promise<T>
// 同时promise的类型，即是resolve返回值的类型
const p: Promise<PromiseI> = new Promise((res, rej) => {
  res({
    data: {
      list: [],
      length: 12,
    },
    code: 1,
    msg: '请求成功',
  })
})

p.then((res) => {
  console.log(res)
})
