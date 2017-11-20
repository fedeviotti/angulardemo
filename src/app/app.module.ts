import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shared/pipes/search.pipe';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app.routing';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ToasterModule } from 'angular2-toaster';
import { UserService } from './shared/services/user.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    FullLayoutComponent,
    UsersComponent,
    UserDetailComponent,
    LoginComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToasterModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'it_IT'
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
