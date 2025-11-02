import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: 'cat',
    // loadChildren: () => import('./features/cat/cat.module').then(m => m.CatModule),
    component: HomeComponent


  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
