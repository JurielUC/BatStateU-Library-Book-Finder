import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  id: string;
  category: string;
  name: string;
  author: string;
  bookno: string;
  bookshelf: string;
  row: string;
}

@Injectable()
export class ItemService {
  public items: Item[] = [];
  public itemsData: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {
  }

  getAllItems() {
    this.items = [
          {
            id: 'engr-1',
            category: 'Engineering',
            name: 'Structures : Or Why Things Dont Fall Down',
            author: 'J. E. Gordon',
            bookno: '0002231',
            bookshelf: 'Shelf 5 ',
            row: 'Row 3',
          },
          {
            id: 'engr-2',
            category: 'Engineering',
            name: 'The Art of Doing Science and Engineering',
            author: 'Richard Hamming',
            bookno: '6753457',
            bookshelf: 'Shelf 5',
            row: 'Row 2',
          },
          {
            id: 'engr-3',
            category: 'vbvbvbvb',
            name: 'The Design of Everyday Things',
            author: 'Don Norman',
            bookno: '7666445',
            bookshelf: 'Shelf 5',
            row: 'Row 1',
          },
          {
            id: 'engr-4',
            category: 'Engineering',
            name: 'Mechanical Engineering for Makers',
            author: 'Brian Bunnell and Samer Najia',
            bookno: '6597560',
            bookshelf: 'Shelf 5',
            row: 'Row 3',
          },
          {
            id: 'engr-5',
            category: 'Engineering',
            name: 'PPI FE Civil Review. A Comprehensive FE Civil Review Manual',
            author: 'Michael R. Lindeburg',
            bookno: '3244323',
            bookshelf: 'Shelf 5',
            row: 'Row 2',
          },
        ];
    this.itemsData.next(this.items);
  }

  getItem(id: string): Item {
    return this.items.find(item => item.id === id) as Item;
  }
}
