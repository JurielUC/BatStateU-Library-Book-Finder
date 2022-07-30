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
            id: 'it-1',
            category: 'Information Technology',
            name: 'The Business of Healthcare Innovation',
            author: 'Lawton Robert Burns',
            bookno: '000021',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-2',
            category: 'Information Technology',
            name: 'Big Data, Big Challenges: A Healthcare Perspective: Background, Issues, Solutions and Research Directions',
            author: 'Mowafa Househ, Andre W. Kushniruk, Elizabeth M. Borycki',
            bookno: '00022',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-3',
            category: 'Information Technology',
            name: 'Fruition',
            author: 'Chris Potts',
            bookno: '00023',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-4',
            category: 'Information Technology',
            name: 'Accountable Care. Bridging the Health Information Technology Divide',
            author: 'J M Bohn, Chon Abraham, Shane Danaher, Cynthia Davis',
            bookno: '00024',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-5',
            category: 'Information Technology',
            name: 'Tools and Weapons: The Promise and the Peril of the Digital Age',
            author: 'Brad Smith, Carol Ann Browne, Bill Gates',
            bookno: '00025',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-6',
            category: 'Information Technology',
            name: 'Information Technology Law',
            author: 'Ian Lloyd',
            bookno: '00026',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },

        {
            id: 'it-7',
            category: 'Information Technology',
            name: 'Grassroots Innovation: Minds On The Margin Are Not Marginal Minds',
            author: 'Anil K. Gupta',
            bookno: '00027',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
          id: 'it-8',
          category: 'Information Technology',
            name: 'Video Systems in an IT Environment, Second Edition: The Basics of Professional Networked Media and Filebased Workflows',
            author: 'Al Kovalick',
            bookno: '00028',
            bookshelf: 'Shelf 1',
          row: 'Row 1',
        },
        
        {
            id: 'it-9',
            category: 'Information Technology',
            name: 'The U.S. Technology Skills Gap, + Website: What Every Technology Executive Must Know to Save Americas Future',
            author: 'Gary J. Beach',
            bookno: '00029',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-10',
            category: 'Information Technology',
            name: 'The Phoenix Project',
            author: 'Gene Kim',
            bookno: '00030',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-11',
            category: 'Information Technology',
            name: 'If Then: How One Data Company Invented the Future',
            author: 'Jill Lepore',
            bookno: '00031',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-12',
            category: 'Information Technology',
            name: 'Management Information Systems, Sixth Edition',
            author: 'Effy Oz',
            bookno: '00032',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
        },
        
        {
            id: 'it-13',
          category: 'Information Technology',
            name: 'Facility Management Technology: Lessons from the U.S. and Japan',
            author: 'Eric Teicholz, Takehiko Ikeda',
            bookno: '00033',
            bookshelf: 'Shelf 1',
          row: 'Row 1',
        },

        {
          id: 'it-14',
          category: 'Information Technology',
          name: 'Information Rules: A Strategic Guide to the Network Economy',
          author: 'Carl Shapiro, Hal R. Varian',
          bookno: '00034',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
      },
      
      {
          id: 'it-15',
          category: 'Information Technology',
          name: 'Digital Transformation: Survive and Thrive in an Era of Mass Extinction',
          author: 'Thomas M. Siebel',
          bookno: '00035',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
      },
      
      {
          id: 'it-16',
          category: 'Information Technology',
          name: 'Human + Machine: Reimagining Work in the Age of AI',
          author: 'Paul R. Daugherty, H. James Wilson',
          bookno: '00036',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
      },
      
      {
          id: 'it-17',
          category: 'Information Technology',
          name: 'The Technology Fallacy: How People Are the Real Key to Digital Transformation',
          author: 'Gerald C. Kane, Anh Nguyen Phillips, Jonathan R. Copulsky, Garth R. Andrus',
          bookno: '00037',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
      },
      
      {
          id: 'it-18',
          category: 'Information Technology',
          name: 'Techlash',
          author: 'Mitroff',
          bookno: '00038',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
      },
      
      {
          id: 'it-19',
          category: 'Information Technology',
          name: 'Reinventing Capitalism In Age Big Data',
          author: 'Viktor and Ramge Mayer-Schonberger',
          bookno: '00039',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
      },
      
      {
          id: 'it-20',
          category: 'Information Technology',
          name: 'ITSM: QuickStart Guide - The Simplified Beginners Guide to IT Service Management',
          author: 'ClydeBank Technology',
          bookno: '00040',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
      },
        ];
    this.itemsData.next(this.items);
  }

  getItem(id: string): Item {
    return this.items.find(item => item.id === id) as Item;
  }
}