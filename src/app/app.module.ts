import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CreateEditContactsComponent } from './contacts/create-edit/create-edit.component';
import { CreateEditUsersComponent } from './users/create-edit/create-edit.component';
import { ListContactsComponent } from './contacts/list/list.component';
import { ListUsersComponent } from './users/list/list.component';
import { Error404Component, NavigationBarComponent } from './sharedComponents';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateEditContactsComponent,
    CreateEditUsersComponent,
    ListContactsComponent,
    ListUsersComponent,
    ListUsersComponent,
    Error404Component,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
