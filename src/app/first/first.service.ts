import { Injectable } from '@angular/core';
import { First } from './first.model';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  getItem(): First {
    return new First('Laptop', 'Compact', 1000, Category.Hardware, false);
  }

  getItems(): Array<First> {
    return [
      new First('Game', 'Interesitng', 100, Category.Software, true),
      new First('PC', 'Powerful', 1000, Category.Hardware, true),
      new First('Laptop', 'Compact', 1000, Category.Hardware, false)
    ];
  }
}
