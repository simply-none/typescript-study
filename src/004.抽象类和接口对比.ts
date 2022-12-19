// 抽象类
abstract class Person {
  // 抽象属性
  abstract name: string;
  abstract age: number;
  abstract getName: () => string;
  // 抽象方法
  abstract getAge(): number;
  // 实例方法
  getSelf() {
    return this
  }
}

// 抽象类只能被普通类继承，不能被实例化（使用new）
class Male extends Person {
  name: string = 'jade qiu';
  age: number = 12;
  getName = () => {
    return this.name
  }
  getAge() {
    return this.age
  }
}

const m = new Male()
console.log(m.getName(), m.getAge(), m.getSelf())

// 接口实现抽象类相同功能
interface PersonItf {
  name: string;
  age: number;
  getName: () => string;
  getAge(): number;
}

class Female implements PersonItf {
  name: string = 'jade qiu';
  age: number = 12;
  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
  getSelf() {
    return this
  }
}

const m2 = new Female()
console.log(m2.getName(), m2.getAge(), m2.getSelf())