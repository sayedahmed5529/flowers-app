import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flowers-app';

  constructor(private appService: AppService, public translate: TranslateService, public  authServ :AuthService , private router :Router) {
    if (!this.authServ.isLoggedIn()) {
      // If user is not authenticated, navigate to the login page
      this.router.navigate(['/login']);
    }
  }
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }

}
