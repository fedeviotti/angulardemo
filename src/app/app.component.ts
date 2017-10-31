import { Component, OnInit } from '@angular/core';
import { UserDto } from './shared/models/index';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  template: `<toaster-container [toasterconfig]="toasterconfig"></toaster-container>
            <router-outlet></router-outlet>`,
})

export class AppComponent implements OnInit {

  toasterconfig: ToasterConfig =
  new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: false,
      timeout: 0
  });

  constructor()
  {


  }

  //Page load
  ngOnInit(): void {

  }

}
