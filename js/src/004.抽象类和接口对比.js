"use strict";
// 抽象类
class Person {
    // 实例方法
    getSelf() {
        return this;
    }
}
// 抽象类只能被普通类继承，不能被实例化（使用new）
class Male extends Person {
    constructor() {
        super(...arguments);
        this.name = 'jade qiu';
        this.age = 12;
        this.getName = () => {
            return this.name;
        };
    }
    getAge() {
        return this.age;
    }
}
const m = new Male();
console.log(m.getName(), m.getAge(), m.getSelf());
class Female {
    constructor() {
        this.name = 'jade qiu';
        this.age = 12;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getSelf() {
        return this;
    }
}
const m2 = new Female();
console.log(m2.getName(), m2.getAge(), m2.getSelf());
//# sourceMappingURL=004.%E6%8A%BD%E8%B1%A1%E7%B1%BB%E5%92%8C%E6%8E%A5%E5%8F%A3%E5%AF%B9%E6%AF%94.js.map