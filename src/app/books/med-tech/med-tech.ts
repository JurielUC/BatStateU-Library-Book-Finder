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
            id:'mt-1',
            category: 'Medical Technology',
            name: 'Brand Therapy: 15 Techniques for Creating Brand Strategy in Pharma and Medtech',
            author: 'Brian D. Smith',
            bookno: '00001',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-2',
            category: 'Medical Technology',
            name: 'Clinical Hematology: Principles, Procedures, Correlations',
            author: 'E. Anne Stiene-Martin, John A. Koepke, Cheryl A. Lotspeich-Steininger',
            bookno: '00002',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-3',
            category: 'Medical Technology',
            name: 'Modern Blood Banking &amp; Transfusion Practices',
            author: 'Denise M. Harmening',
            bookno: '00003',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-4',
            category: 'Medical Technology',
            name: 'Medical Laboratory Management And Supervision; Operations, Review, And Study Guide',
            author: 'Lionel A. Varnadoe',
            bookno: '00004',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-5',
            category: 'Medical Technology',
            name: 'Medical Parasitology in the Philippines',
            author: 'Vicente Y. Belizario Jr. (Editor), Winifreda U. de Leon (Editor)',
            bookno: '00005',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-6',
            category: 'Medical Technology',
            name: 'The Gene: An Intimate History',
            author: 'Siddhartha Mukherjee',
            bookno: '00006',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-7',
            category: 'Medical Technology',
            name: 'Textbook of Medical Laboratory Technology',
            author: 'Praful B. Godkar, Darshan P. Godkar',
            bookno: '00007',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-8',
            category: 'Medical Technology',
            name: 'Chemistry for the Health Sciences',
            author: 'George I. Sackheim',
            bookno: '00008',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-9',
            category: 'Medical Technology',
            name: 'E-Patients Live Longer: The Complete Guide to Managing Health Care Using Technology',
            author: 'Nancy B. Finn',
            bookno: '00009',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-10',
            category: 'Medical Technology',
            name: 'Let Patients Help!',
            author: 'Dave deBronkart, Danny Sands (Contributor), Eric J. Topol (Introduction)',
            bookno: '00010',
            bookshelf: 'Shelf 4',
            row: 'Row 1',
          },
          {
            id:'mt-11',
            category: 'Medical Technology',
            name: 'Designing Your Life: Build a Life that Works for You',
            author: 'Bill Burnett, Dave Evans',
            bookno: '00011',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt12',
            category: 'Medical Technology',
            name: 'Analytical Chemistry',
            author: 'H. Kaur',
            bookno: '00012',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt-13',
            category: 'Medical Technology',
            name: 'Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again',
            author: 'Eric J. Topol',
            bookno: '00013',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt-14',
            category: 'Medical Technology',
            name: 'Molecular Diagnostics: Fundamentals, Methods, &amp; Clinical Applications',
            author: 'Maribeth L. Flaws, Lela Buckingham',
            bookno: '00014',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt-15',
            category: 'Medical Technology',
            name: 'Kuby Immunology',
            author: 'Judy A. Owen, Jenni Punt, Sharon A. Stranford',
            bookno: '00015',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt-16',
            category: 'Medical Technology',
            name: 'Flow Cytometry in Clinical Diagnosis',
            author: 'John L. Carey (Editor), David F. Keren (Editor), J. Philip McCoy Jr. (Editor)',
            bookno: '00016',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt-17',
            category: 'Medical Technology',
            name: 'Practical Flow Cytometry',
            author: 'Howard M. Shapiro',
            bookno: '00017',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt-18',
            category: 'Medical Technology',
            name: 'Human Molecular Genetics',
            author: 'Tom Strachan, Andrew P. Read',
            bookno: '00018',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt-19',
            category: 'Medical Technology',
            name: 'Clinical Immunology; Serology A Laboratory Perspective',
            author: 'Christine Dorresteyn Stevens',
            bookno: '00019',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
          {
            id:'mt-20',
            category: 'Medical Technology',
            name: 'Principles of Public Health Microbiology',
            author: 'Robert S Burlage',
            bookno: '00020',
            bookshelf: 'Shelf 4',
            row: 'Row 2',
          },
        ];
    this.itemsData.next(this.items);
  }

  getItem(id: string): Item {
    return this.items.find(item => item.id === id) as Item;
  }
}
