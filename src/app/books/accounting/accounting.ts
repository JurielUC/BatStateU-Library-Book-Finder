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
            id:'acc-1',
            category: 'Accounting',
            name: 'Principles Of Accounting Volume 1 Financial Accounting',
            author: 'Valix,Peralta And Valix',
            bookno: '00041',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          },
          {
            id:'acc-2',
            category: 'Accounting',
            name: 'Principles Of Accounting Volume 2 Managerial Accounting',
            author: 'Valix,Peralta And Valix',
            bookno: '00042',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          }, 
          {
            id:'acc-3',
            category: 'Accounting',
            name: 'Intermediate Financial Accounting',
            author: 'Millan,Zeus Vernon',
            bookno: '00043',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          }, 
          {
            id:'acc-4',
            category: 'Accounting',
            name: 'PASs/PFRSs Compilation',
            author: 'PICPA Metro',
            bookno: '00044',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          }, 
          {
            id:'acc-5',
            category: 'Accounting',
            name: 'Advanced Accounting Vol. 1 And 2',
            author: 'Guerrero',
            bookno: '00045',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          }, 
          {
            id:'acc-6',
            category: 'Accounting',
            name: 'Advanced Financial Accounting',
            author: 'Dayag, Antonio',
            bookno: '00046',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          }, 
          {
            id:'acc-7',
            category: 'Accounting',
            name: 'Accounting Information System',
            author: 'Hall, James A',
            bookno: '00047',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          },
          {
            id:'acc-8',
            category: 'Accounting',
            name: 'Quantitative Techniques For Management',
            author: 'Levine, David M',
            bookno: '00048',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          },
          {
            id:'acc-9',
            category: 'Accounting',
            name: 'Quantitative Analysis For Management',
            author: 'Render, Stair And Hannah',
            bookno: '00049',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          },	
          {
            id:'acc-10',
            category: 'Accounting',
            name: 'Cost Accounting:Foundations And Evolutions',
            author: 'Kinney And Raiborn',
            bookno: '00050',
            bookshelf: 'Shelf 2',
            row: 'Row 1',
          },
          {
            id:'acc-11',
            category: 'Accounting',
            name: 'Cost Accounting:A Managerial Emphasis',
            author: 'Homgren, Charles',
            bookno: '00051',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },
          {
            id:'acc-12',
            category: 'Accounting',
            name: 'Introduction to Management Accounting',
            author: 'Homgren, Suddem et al',
            bookno: '00052',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },
          {
            id:'acc-13',
            category: 'Accounting',
            name: 'Managerial Accounting',
            author: 'Garrison, Noreen et al',
            bookno: '00053',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },		
          {
            id:'acc-14',
            category: 'Accounting',
            name: 'Management Advisory Services',
            author: 'Roque',
            bookno: '00054',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },		
          {
            id:'acc-15',
            category: 'Accounting',
            name: 'Goverment Accounting',
            author: 'Punzalan',
            bookno: '00055',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },
          {
            id:'acc-16',
            category: 'Accounting',
            name: 'Auditing Theory',
            author: 'Salosagcol, Tiu And Hermosilla',
            bookno: '00056',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },	
          {
            id:'acc-17',
            category: 'Accounting',
            name: 'Auditing Assurance And Principles',
            author: 'Ireneo, Ireneo And James',
            bookno: '00057',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },
          {
            id:'acc-18',
            category: 'Accounting',
            name: 'Applied Auditing',
            author: 'Cabrera, Ma. Elenita',
            bookno: '00058',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },	
          {
            id:'acc-19',
            category: 'Accounting',
            name: 'Income Taxation',
            author: 'Banggawan, Rex',
            bookno: '00059',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },
          {
            id:'acc-20',
            category: 'Accounting',
            name: 'Law Obligations And Contracts',
            author: 'De Leon, Hector',
            bookno: '00060',
            bookshelf: 'Shelf 2',
            row: 'Row 2',
          },
        ];
    this.itemsData.next(this.items);
  }

  getItem(id: string): Item {
    return this.items.find(item => item.id === id) as Item;
  }
}
