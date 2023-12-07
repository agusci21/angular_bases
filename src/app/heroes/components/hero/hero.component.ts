import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman'
  public age: number = 45

  public get capitalizedName(): string {
    return this.name.toUpperCase()
  }


  public setName = (value: string) => {
    this.name = value
  }

  public reset() {
    this.age = 45
    this.name = 'ironman'
  }

  public setAge = (value: number) => {
    this.age = value
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }
}
