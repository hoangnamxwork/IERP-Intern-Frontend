import { Component } from '@angular/core';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private auth: AuthService, private toast: NgToastService){}
  signOut(){
    this.toast.info({detail:"INFO", summary:"You signed out!", duration:3000})
    this.auth.signOut();
  }
}
