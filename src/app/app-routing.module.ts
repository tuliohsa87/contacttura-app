import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login'
import { CreateEditContactsComponent, ListContactsComponent } from './contacts';
import { CreateEditUsersComponent, ListUsersComponent } from './users';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contacts-create-edit', component: CreateEditContactsComponent },
  { path: 'contacts-list', component: ListContactsComponent },
  { path: 'user-create-edit', component: CreateEditUsersComponent },
  { path: 'user-list', component: ListUsersComponent },
//  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
