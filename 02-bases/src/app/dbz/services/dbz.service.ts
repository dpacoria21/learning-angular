import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})

export class DbzService {

    
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Goku',
            power: 50,
        },
        {
            id: uuid(),
            name: 'Krilin',
            power: 10,
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7600
        }
    ];

    recibirCharacter(character: Character): void {
        
        const newCharacter: Character = {
            id: uuid(),
            ...character
        }

        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(id: number): void {
    //     this.characters.splice(id, 1);
    // }
    deleteCharacterById(id: string): void {
        this.characters = this.characters.filter((character) => character.id !== id);
    }
    
}