import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent} from './student/list/list.component';
import {AddComponent} from './student/add/add.component';
import {DeleteComponent} from './student/delete/delete.component';
import {EditComponent} from './student/edit/edit.component';

const routes: Routes = [
  {
    path: 'student/list',
    component: ListComponent
  },
  {
    path: 'student/create',
    component: AddComponent
  },
  {
    path: 'student/edit/:id',
    component: EditComponent
  },
  {
    path: 'student/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
