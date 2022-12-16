interface PromiseI {
    data: PromiseDataI;
    code: number;
    msg: string;
}
interface PromiseDataI {
    list: {
        id: number;
        name: string;
    }[];
    length: number;
}
declare const p: Promise<PromiseI>;
