import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { FullLayoutComponent} from './full-layout/full-layout.component'
import { UsersComponent} from './users/users.component'
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: 'fullayout',
        component: FullLayoutComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'user/:id',
                component: UserDetailComponent
            },
            {
              path: 'settings',
              component: SettingsComponent
          }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]


})
export class AppRoutingModule { }
