declare function getLength(this: ObjI, name: string): void;
interface ObjI {
    myName: string;
    getLength: (p: string) => void;
}
declare let obj: ObjI;
