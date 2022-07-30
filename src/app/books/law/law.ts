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
            id: 'Law-1',
            category: 'LAW',
            name: 'Intellectual Property Law',
            author: 'Ranhilio Aquino',
            bookno: '000041',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-2',
            category: 'LAW',
            name: 'Law on Transportation',
            author: 'Noli Diaz',
            bookno: '000042',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-3',
            category: 'LAW',
            name: 'Election Law',
            author: 'Emmanuel Tipon',
            bookno: '000043',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-4',
            category: 'LAW',
            name: 'International Law',
            author: 'Joaquin Bernas and Jovito Salonga',
            bookno: '000044',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-5',
            category: 'LAW',
            name: 'Negotiable Instruments of Law',
            author: 'Hector de Leon and Salvador Ausria',
            bookno: '000045',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-6',
            category: 'LAW',
            name: 'Law on Credit Transaction',
            author: 'Hector de Leon',
            bookno: '000046',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-7',
            category: 'LAW',
            name: 'Trial Technique and Practice',
            author: 'Generosio Jacinto ',
            bookno: '000047',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-8',
            category: 'LAW',
            name: 'Banking Laws',
            author: 'Timoteo Aquino',
            bookno: '000048',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-9',
            category: 'LAW',
            name: 'Insurance Law',
            author: 'Hector de Leon',
            bookno: '000049',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-10',
            category: 'LAW',
            name: 'Labor Code of the Philippines',
            author: 'Azucena',
            bookno: '000050',
            bookshelf: 'Shelf 3',
            row: 'Row 1',
        },
        
        {
            id: 'Law-11',
            category: 'LAW',
            name: 'Civil Code I, II',
            author: 'Edgardo Paras',
            bookno: '000051',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-12',
            category: 'LAW',
            name: 'The Fundamental of Taxation',
            author: 'Hector de Leon',
            bookno: '000052',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-13',
            category: 'LAW',
            name: 'Tax Law and Jurisprudence',
            author: 'Jose Vitug',
            bookno: '000053',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-14',
            category: 'LAW',
            name: 'Reviewer on Commercial Law',
            author: 'Sundiang and Aquino',
            bookno: '000054',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-15',
            category: 'LAW',
            name: 'Corporation Law',
            author: 'Hector de leon',
            bookno: '000055',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-16',
            category: 'LAW',
            name: 'Insurance',
            author: 'Hector de Leon',
            bookno: '000056',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-17',
            category: 'LAW',
            name: 'sales',
            author: 'Hctor de Leon',
            bookno: '000057',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-18',
            category: 'LAW',
            name: 'Philippine Political Law',
            author: 'Isagani Cruz',
            bookno: '000058',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-19',
            category: 'LAW',
            name: 'Constitutional Law',
            author: 'Isagani Cruz and Joaquin Bernas',
            bookno: '000059',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        
        {
            id: 'Law-20',
            category: 'LAW',
            name: 'Statutory Construction',
            author: 'Ruben Agpalo',
            bookno: '000060',
            bookshelf: 'Shelf 3',
            row: 'Row 2',
        },
        ];
    this.itemsData.next(this.items);
  }

  getItem(id: string): Item {
    return this.items.find(item => item.id === id) as Item;
  }
}
