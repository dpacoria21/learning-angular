import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})

export class DbzService {

    
    public characters: Character[] = [
        {
            name: 'Goku',
            power: 50,
        },
        {
            name: 'Krilin',
            power: 10,
        },
        {
            name: 'Vegeta',
            power: 7600
        }
    ];

    recibirCharacter(character: Character): void {
        console.log(character, '  main Page');
        const {name, power} = character;
        this.characters.push({name, power});
    }

    onDeleteCharacter(id: number): void {
        this.characters.splice(id, 1);
    }
    
}