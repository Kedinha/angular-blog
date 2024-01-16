import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  //portifolio
  {
    path: 'portifolio',
    component: CardComponent,
    children: [
      //porifolio/1(o id)
      { path: ':id', component: CardComponent },
      //portifolio/1/kedma(o token)
      { path: ':id/:token', component: CardComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
