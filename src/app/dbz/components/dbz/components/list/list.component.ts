import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input('characterList')
  public characterList: Character[] = []

  @Output()
  public onDeleted: EventEmitter<number> = new EventEmitter()

  onDeleteCharacter(index: number) {
    this.onDeleted.emit(index)
  }

}
