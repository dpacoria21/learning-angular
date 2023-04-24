

function addNumbers(a: number, b:number): number {
    return a+b;
}

const addNumbersArrow = (a: number, b:number): string => `${a+b}`; 

function multiply (firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}
// const result = addNumbers(5, 6);

// const resultArrow = addNumbersArrow(10, 5);

// const multiplyResult = multiply(5);

// console.log({result, resultArrow, multiplyResult});

interface Character {
    name: string,
    hp: number,
    showHp: () => void, // boolean, string, number
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 30);
healCharacter(strider, 20);

strider.showHp();



export {};