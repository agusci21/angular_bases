import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DBZService {

    public characters: Character[] = []

    onNewCharacter(character: Character) {
        const newCharacter: Character = {
            ...character,
            id: uuid(),
        }
        this.characters.push(newCharacter)
    }

    onDeletedCharacterById(id: string) {
        this.characters = this.characters.filter(character => character.id !== id)
    }

    constructor() { }

}