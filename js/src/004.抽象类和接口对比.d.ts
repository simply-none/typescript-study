declare abstract class Person {
    abstract name: string;
    abstract age: number;
    abstract getName: () => string;
    abstract getAge(): number;
    getSelf(): this;
}
declare class Male extends Person {
    name: string;
    age: number;
    getName: () => string;
    getAge(): number;
}
declare const m: Male;
interface PersonItf {
    name: string;
    age: number;
    getName: () => string;
    getAge(): number;
}
declare class Female implements PersonItf {
    name: string;
    age: number;
    getName(): string;
    getAge(): number;
    getSelf(): this;
}
declare const m2: Female;
