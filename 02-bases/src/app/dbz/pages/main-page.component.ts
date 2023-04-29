import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

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
    }

}