export function whatsMyType<T>( argument: T ): T {

    return argument;

}

const amIString = whatsMyType<string>('Hola Mundo!!!');
const amINumber = whatsMyType<number>(100);
const myNumbers = whatsMyType<number[]>([1,2,3,4,5]);


