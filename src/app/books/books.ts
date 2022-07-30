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
  location: string;
  floor: string;
}

@Injectable()
export class ItemService {
  public items: Item[] = [];
  public itemsData: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() {
  }

  getAllItems() {
    this.items = [
          //engineering books
          {
            id: 'engr-1',
            category: 'Engineering',
            name: 'Structures : Or Why Things Dont Fall Down',
            author: 'J. E. Gordon',
            bookno: '0002231',
            bookshelf: 'Shelf 5 ',
            row: 'Row 3',
            location: '/assets/shelf-five.jpg',
            floor: 'Second Floor'
          },
          {
            id: 'engr-2',
            category: 'Engineering',
            name: 'The Art of Doing Science and Engineering',
            author: 'Richard Hamming',
            bookno: '6753457',
            bookshelf: 'Shelf 5',
            row: 'Row 2',
            location: '/assets/shelf-five.jpg',
            floor: 'Second Floor'
          },
          {
            id: 'engr-3',
            category: 'Engineering',
            name: 'The Design of Everyday Things',
            author: 'Don Norman',
            bookno: '7666445',
            bookshelf: 'Shelf 5',
            row: 'Row 1',
            location: '/assets/shelf-five.jpg',
            floor: 'Second Floor'
          },
          {
            id: 'engr-4',
            category: 'Engineering',
            name: 'Mechanical Engineering for Makers',
            author: 'Brian Bunnell and Samer Najia',
            bookno: '6597560',
            bookshelf: 'Shelf 5',
            row: 'Row 3',
            location: '/assets/shelf-five.jpg',
            floor: 'Second Floor'
          },
          {
            id: 'engr-5',
            category: 'Engineering',
            name: 'PPI FE Civil Review. A Comprehensive FE Civil Review Manual',
            author: 'Michael R. Lindeburg',
            bookno: '3244323',
            bookshelf: 'Shelf 5',
            row: 'Row 2',
            location: '/assets/shelf-five.jpg',
            floor: 'Second Floor'
          },
          // information technology books
          {
            id: 'it-1',
            category: 'Information Technology',
            name: 'The Business of Healthcare Innovation',
            author: 'Lawton Robert Burns',
            bookno: '000021',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
            
          },
          {
            id: 'it-2',
            category: 'Information Technology',
            name: 'Big Data, Big Challenges: A Healthcare Perspective: Background, Issues, Solutions and Research Directions',
            author: 'Mowafa Househ, Andre W. Kushniruk, Elizabeth M. Borycki',
            bookno: '00022',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
          },
          {
            id: 'it-3',
            category: 'Information Technology',
            name: 'Fruition',
            author: 'Chris Potts',
            bookno: '00023',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
          },
        
          {
            id: 'it-4',
            category: 'Information Technology',
            name: 'Accountable Care. Bridging the Health Information Technology Divide',
            author: 'J M Bohn, Chon Abraham, Shane Danaher, Cynthia Davis',
            bookno: '00024',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
          },
        
          {
            id: 'it-5',
            category: 'Information Technology',
            name: 'Tools and Weapons: The Promise and the Peril of the Digital Age',
            author: 'Brad Smith, Carol Ann Browne, Bill Gates',
            bookno: '00025',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
          },
        
        {
            id: 'it-6',
            category: 'Information Technology',
            name: 'Information Technology Law',
            author: 'Ian Lloyd',
            bookno: '00026',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
        },

        {
            id: 'it-7',
            category: 'Information Technology',
            name: 'Grassroots Innovation: Minds On The Margin Are Not Marginal Minds',
            author: 'Anil K. Gupta',
            bookno: '00027',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
        },
        
        {
            id: 'it-8',
            category: 'Information Technology',
            name: 'Video Systems in an IT Environment, Second Edition: The Basics of Professional Networked Media and Filebased Workflows',
            author: 'Al Kovalick',
            bookno: '00028',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
        },
        
        {
            id: 'it-9',
            category: 'Information Technology',
            name: 'The U.S. Technology Skills Gap, + Website: What Every Technology Executive Must Know to Save Americas Future',
            author: 'Gary J. Beach',
            bookno: '00029',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
        },
        
        {
            id: 'it-10',
            category: 'Information Technology',
            name: 'The Phoenix Project',
            author: 'Gene Kim',
            bookno: '00030',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
        },
        
        {
            id: 'it-11',
            category: 'Information Technology',
            name: 'If Then: How One Data Company Invented the Future',
            author: 'Jill Lepore',
            bookno: '00031',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
        },
        
        {
            id: 'it-12',
            category: 'Information Technology',
            name: 'Management Information Systems, Sixth Edition',
            author: 'Effy Oz',
            bookno: '00032',
            bookshelf: 'Shelf 1',
            row: 'Row 1',
            location: '/assets/shelf-one.jpg',
            floor: 'Second Floor'
        },
        
        {
            id: 'it-13',
          category: 'Information Technology',
            name: 'Facility Management Technology: Lessons from the U.S. and Japan',
            author: 'Eric Teicholz, Takehiko Ikeda',
            bookno: '00033',
            bookshelf: 'Shelf 1',
          row: 'Row 1',
          location: '/assets/shelf-one.jpg',
          floor: 'Second Floor'
        },

        {
          id: 'it-14',
          category: 'Information Technology',
          name: 'Information Rules: A Strategic Guide to the Network Economy',
          author: 'Carl Shapiro, Hal R. Varian',
          bookno: '00034',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
          location: '/assets/shelf-one.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'it-15',
          category: 'Information Technology',
          name: 'Digital Transformation: Survive and Thrive in an Era of Mass Extinction',
          author: 'Thomas M. Siebel',
          bookno: '00035',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
          location: '/assets/shelf-one.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'it-16',
          category: 'Information Technology',
          name: 'Human + Machine: Reimagining Work in the Age of AI',
          author: 'Paul R. Daugherty, H. James Wilson',
          bookno: '00036',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
          location: '/assets/shelf-one.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'it-17',
          category: 'Information Technology',
          name: 'The Technology Fallacy: How People Are the Real Key to Digital Transformation',
          author: 'Gerald C. Kane, Anh Nguyen Phillips, Jonathan R. Copulsky, Garth R. Andrus',
          bookno: '00037',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
          location: '/assets/shelf-one.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'it-18',
          category: 'Information Technology',
          name: 'Techlash',
          author: 'Mitroff',
          bookno: '00038',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
          location: '/assets/shelf-one.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'it-19',
          category: 'Information Technology',
          name: 'Reinventing Capitalism In Age Big Data',
          author: 'Viktor and Ramge Mayer-Schonberger',
          bookno: '00039',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
          location: '/assets/shelf-one.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'it-20',
          category: 'Information Technology',
          name: 'ITSM: QuickStart Guide - The Simplified Beginners Guide to IT Service Management',
          author: 'ClydeBank Technology',
          bookno: '00040',
          bookshelf: 'Shelf 1',
          row: 'Row 1',
          location: '/assets/shelf-one.jpg',
          floor: 'Second Floor'
      },
        // law books
        {
          id: 'Law-1',
          category: 'LAW',
          name: 'Intellectual Property Law',
          author: 'Ranhilio Aquino',
          bookno: '000041',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-2',
          category: 'LAW',
          name: 'Law on Transportation',
          author: 'Noli Diaz',
          bookno: '000042',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-3',
          category: 'LAW',
          name: 'Election Law',
          author: 'Emmanuel Tipon',
          bookno: '000043',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-4',
          category: 'LAW',
          name: 'International Law',
          author: 'Joaquin Bernas and Jovito Salonga',
          bookno: '000044',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-5',
          category: 'LAW',
          name: 'Negotiable Instruments of Law',
          author: 'Hector de Leon and Salvador Ausria',
          bookno: '000045',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-6',
          category: 'LAW',
          name: 'Law on Credit Transaction',
          author: 'Hector de Leon',
          bookno: '000046',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-7',
          category: 'LAW',
          name: 'Trial Technique and Practice',
          author: 'Generosio Jacinto ',
          bookno: '000047',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-8',
          category: 'LAW',
          name: 'Banking Laws',
          author: 'Timoteo Aquino',
          bookno: '000048',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-9',
          category: 'LAW',
          name: 'Insurance Law',
          author: 'Hector de Leon',
          bookno: '000049',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-10',
          category: 'LAW',
          name: 'Labor Code of the Philippines',
          author: 'Azucena',
          bookno: '000050',
          bookshelf: 'Shelf 3',
          row: 'Row 1',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-11',
          category: 'LAW',
          name: 'Civil Code I, II',
          author: 'Edgardo Paras',
          bookno: '000051',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-12',
          category: 'LAW',
          name: 'The Fundamental of Taxation',
          author: 'Hector de Leon',
          bookno: '000052',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-13',
          category: 'LAW',
          name: 'Tax Law and Jurisprudence',
          author: 'Jose Vitug',
          bookno: '000053',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-14',
          category: 'LAW',
          name: 'Reviewer on Commercial Law',
          author: 'Sundiang and Aquino',
          bookno: '000054',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-15',
          category: 'LAW',
          name: 'Corporation Law',
          author: 'Hector de leon',
          bookno: '000055',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-16',
          category: 'LAW',
          name: 'Insurance',
          author: 'Hector de Leon',
          bookno: '000056',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-17',
          category: 'LAW',
          name: 'sales',
          author: 'Hctor de Leon',
          bookno: '000057',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-18',
          category: 'LAW',
          name: 'Philippine Political Law',
          author: 'Isagani Cruz',
          bookno: '000058',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-19',
          category: 'LAW',
          name: 'Constitutional Law',
          author: 'Isagani Cruz and Joaquin Bernas',
          bookno: '000059',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
      
      {
          id: 'Law-20',
          category: 'LAW',
          name: 'Statutory Construction',
          author: 'Ruben Agpalo',
          bookno: '000060',
          bookshelf: 'Shelf 3',
          row: 'Row 2',
          location: '/assets/shelf-three.jpg',
          floor: 'Second Floor'
      },
        // accounting books
        {
          id:'acc-1',
          category: 'Accounting',
          name: 'Principles Of Accounting Volume 1 Financial Accounting',
          author: 'Valix,Peralta And Valix',
          bookno: '00041',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-2',
          category: 'Accounting',
          name: 'Principles Of Accounting Volume 2 Managerial Accounting',
          author: 'Valix,Peralta And Valix',
          bookno: '00042',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        }, 
        {
          id:'acc-3',
          category: 'Accounting',
          name: 'Intermediate Financial Accounting',
          author: 'Millan,Zeus Vernon',
          bookno: '00043',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        }, 
        {
          id:'acc-4',
          category: 'Accounting',
          name: 'PASs/PFRSs Compilation',
          author: 'PICPA Metro',
          bookno: '00044',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        }, 
        {
          id:'acc-5',
          category: 'Accounting',
          name: 'Advanced Accounting Vol. 1 And 2',
          author: 'Guerrero',
          bookno: '00045',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        }, 
        {
          id:'acc-6',
          category: 'Accounting',
          name: 'Advanced Financial Accounting',
          author: 'Dayag, Antonio',
          bookno: '00046',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        }, 
        {
          id:'acc-7',
          category: 'Accounting',
          name: 'Accounting Information System',
          author: 'Hall, James A',
          bookno: '00047',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-8',
          category: 'Accounting',
          name: 'Quantitative Techniques For Management',
          author: 'Levine, David M',
          bookno: '00048',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-9',
          category: 'Accounting',
          name: 'Quantitative Analysis For Management',
          author: 'Render, Stair And Hannah',
          bookno: '00049',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },	
        {
          id:'acc-10',
          category: 'Accounting',
          name: 'Cost Accounting:Foundations And Evolutions',
          author: 'Kinney And Raiborn',
          bookno: '00050',
          bookshelf: 'Shelf 2',
          row: 'Row 1',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-11',
          category: 'Accounting',
          name: 'Cost Accounting:A Managerial Emphasis',
          author: 'Homgren, Charles',
          bookno: '00051',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-12',
          category: 'Accounting',
          name: 'Introduction to Management Accounting',
          author: 'Homgren, Suddem et al',
          bookno: '00052',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-13',
          category: 'Accounting',
          name: 'Managerial Accounting',
          author: 'Garrison, Noreen et al',
          bookno: '00053',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },		
        {
          id:'acc-14',
          category: 'Accounting',
          name: 'Management Advisory Services',
          author: 'Roque',
          bookno: '00054',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },		
        {
          id:'acc-15',
          category: 'Accounting',
          name: 'Goverment Accounting',
          author: 'Punzalan',
          bookno: '00055',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-16',
          category: 'Accounting',
          name: 'Auditing Theory',
          author: 'Salosagcol, Tiu And Hermosilla',
          bookno: '00056',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },	
        {
          id:'acc-17',
          category: 'Accounting',
          name: 'Auditing Assurance And Principles',
          author: 'Ireneo, Ireneo And James',
          bookno: '00057',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-18',
          category: 'Accounting',
          name: 'Applied Auditing',
          author: 'Cabrera, Ma. Elenita',
          bookno: '00058',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },	
        {
          id:'acc-19',
          category: 'Accounting',
          name: 'Income Taxation',
          author: 'Banggawan, Rex',
          bookno: '00059',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        {
          id:'acc-20',
          category: 'Accounting',
          name: 'Law Obligations And Contracts',
          author: 'De Leon, Hector',
          bookno: '00060',
          bookshelf: 'Shelf 2',
          row: 'Row 2',
          location: '/assets/shelf-two.jpg',
          floor: 'Second Floor'
        },
        //med technology
        {
          id:'mt-1',
          category: 'Medical Technology',
          name: 'Brand Therapy: 15 Techniques for Creating Brand Strategy in Pharma and Medtech',
          author: 'Brian D. Smith',
          bookno: '00001',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-2',
          category: 'Medical Technology',
          name: 'Clinical Hematology: Principles, Procedures, Correlations',
          author: 'E. Anne Stiene-Martin, John A. Koepke, Cheryl A. Lotspeich-Steininger',
          bookno: '00002',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-3',
          category: 'Medical Technology',
          name: 'Modern Blood Banking &amp; Transfusion Practices',
          author: 'Denise M. Harmening',
          bookno: '00003',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-4',
          category: 'Medical Technology',
          name: 'Medical Laboratory Management And Supervision; Operations, Review, And Study Guide',
          author: 'Lionel A. Varnadoe',
          bookno: '00004',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-5',
          category: 'Medical Technology',
          name: 'Medical Parasitology in the Philippines',
          author: 'Vicente Y. Belizario Jr. (Editor), Winifreda U. de Leon (Editor)',
          bookno: '00005',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-6',
          category: 'Medical Technology',
          name: 'The Gene: An Intimate History',
          author: 'Siddhartha Mukherjee',
          bookno: '00006',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-7',
          category: 'Medical Technology',
          name: 'Textbook of Medical Laboratory Technology',
          author: 'Praful B. Godkar, Darshan P. Godkar',
          bookno: '00007',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-8',
          category: 'Medical Technology',
          name: 'Chemistry for the Health Sciences',
          author: 'George I. Sackheim',
          bookno: '00008',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-9',
          category: 'Medical Technology',
          name: 'E-Patients Live Longer: The Complete Guide to Managing Health Care Using Technology',
          author: 'Nancy B. Finn',
          bookno: '00009',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-10',
          category: 'Medical Technology',
          name: 'Let Patients Help!',
          author: 'Dave deBronkart, Danny Sands (Contributor), Eric J. Topol (Introduction)',
          bookno: '00010',
          bookshelf: 'Shelf 4',
          row: 'Row 1',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-11',
          category: 'Medical Technology',
          name: 'Designing Your Life: Build a Life that Works for You',
          author: 'Bill Burnett, Dave Evans',
          bookno: '00011',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt12',
          category: 'Medical Technology',
          name: 'Analytical Chemistry',
          author: 'H. Kaur',
          bookno: '00012',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-13',
          category: 'Medical Technology',
          name: 'Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again',
          author: 'Eric J. Topol',
          bookno: '00013',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-14',
          category: 'Medical Technology',
          name: 'Molecular Diagnostics: Fundamentals, Methods, &amp; Clinical Applications',
          author: 'Maribeth L. Flaws, Lela Buckingham',
          bookno: '00014',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-15',
          category: 'Medical Technology',
          name: 'Kuby Immunology',
          author: 'Judy A. Owen, Jenni Punt, Sharon A. Stranford',
          bookno: '00015',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-16',
          category: 'Medical Technology',
          name: 'Flow Cytometry in Clinical Diagnosis',
          author: 'John L. Carey (Editor), David F. Keren (Editor), J. Philip McCoy Jr. (Editor)',
          bookno: '00016',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-17',
          category: 'Medical Technology',
          name: 'Practical Flow Cytometry',
          author: 'Howard M. Shapiro',
          bookno: '00017',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-18',
          category: 'Medical Technology',
          name: 'Human Molecular Genetics',
          author: 'Tom Strachan, Andrew P. Read',
          bookno: '00018',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-19',
          category: 'Medical Technology',
          name: 'Clinical Immunology; Serology A Laboratory Perspective',
          author: 'Christine Dorresteyn Stevens',
          bookno: '00019',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        {
          id:'mt-20',
          category: 'Medical Technology',
          name: 'Principles of Public Health Microbiology',
          author: 'Robert S Burlage',
          bookno: '00020',
          bookshelf: 'Shelf 4',
          row: 'Row 2',
          location: '/assets/shelf-four.jpg',
          floor: 'Second Floor'
        },
        ];
    this.itemsData.next(this.items);
  }

  getItem(id: string): Item {
    return this.items.find(item => item.id === id) as Item;
  }
  
}
