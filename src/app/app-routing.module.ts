import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'book-category',
    loadChildren: () => import('./book-category/book-category.module').then( m => m.BookCategoryPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'books-it',
    loadChildren: () => import('./books-it/books-it.module').then( m => m.BooksItPageModule)
  },
  {
    path: 'books-accounting',
    loadChildren: () => import('./books-accounting/books-accounting.module').then( m => m.BooksAccountingPageModule)
  },
  {
    path: 'books-engineering',
    loadChildren: () => import('./books-engineering/books-engineering.module').then( m => m.BooksEngineeringPageModule)
  },
  {
    path: 'books-law',
    loadChildren: () => import('./books-law/books-law.module').then( m => m.BooksLawPageModule)
  },
  {
    path: 'books-medtech',
    loadChildren: () => import('./books-medtech/books-medtech.module').then( m => m.BooksMedtechPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  },
  {
    path: 'd-location/:id',
    loadChildren: () => import('./d-location/d-location.module').then( m => m.DLocationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
