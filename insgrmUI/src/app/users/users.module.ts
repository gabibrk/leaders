import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FeedsComponent } from './components/main/feeds/feeds.component';
import { SearchComponent } from './components/search/search.component';
import { UsersRoutingModule } from './user-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ShortNumberPipe } from './pipe/short-number.pipe';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FeedsComponent,
    SearchComponent,
    UsersListComponent,
    ShortNumberPipe
  ],
  imports: [
    UsersRoutingModule,
    CommonModule
  ]
})
export class UsersModule { }
