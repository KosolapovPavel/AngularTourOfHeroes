
export interface Hero {
  id: number;
  name: string;

  getTitle(): string
}

class CurrentHero implements Hero {
  id: number;
  name: string;

  getTitle(): string {
    return `Name: ${this.name}`
  }
}