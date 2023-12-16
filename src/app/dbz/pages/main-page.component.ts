

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {
    public characters: Character[] = []

    onNewCharacter(character : Character) {
        this.characters.push(character)
    }

    onDeletedCharacter( id : number){
        this.characters.splice(id, 1)
    }
}