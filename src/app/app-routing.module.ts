import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstService } from './services/consts/const.service';
import { NewsListComponent } from './components/news-list.component';

const routes: Routes = [
  { path: '', redirectTo: ConstService.default,pathMatch: 'full'},
  { path: ConstService.default, component: NewsListComponent},
  { path: '**', redirectTo: ConstService.default,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }