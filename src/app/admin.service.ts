import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

  isUp = true;
  fixers = ['No one'];

  constructor() { }

  public addFixerToList(name: string): void {
    if (this.fixers[0] === 'No one') {
      this.fixers = [];
    }
    this.fixers.push(name);
  }

  public clearList(): void {
    this.fixers = ['No one'];
  }

}
