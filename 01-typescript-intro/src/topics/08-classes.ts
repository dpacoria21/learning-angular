

export class Person {

    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        public lastName: string, 
        private address?: string
    ){}

}


// export class Hero extends Person {



//     constructor(
//         public afterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'New York');
//     }
    
// }


export class Hero{

    constructor(
        public afterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
    }
    
}

const person = new Person('Tony','Stark','New York');

const ironman = new Hero('Ironman', 45 ,'Tony', person);

console.log(ironman);
