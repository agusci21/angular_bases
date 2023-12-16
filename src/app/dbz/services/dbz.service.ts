import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DBZService {

    public characters: Character[] = []

    onNewCharacter(character : Character) {
        this.characters.push(character)
    }

    onDeletedCharacter( id : number){
        this.characters.splice(id, 1)
    }

    constructor() { }
    
}