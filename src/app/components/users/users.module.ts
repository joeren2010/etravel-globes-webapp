import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ListofUsersComponent } from './listof-users/listof-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';




@NgModule({
  declarations: [
    UsersComponent,
    ListofUsersComponent,
    CreateUserComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
