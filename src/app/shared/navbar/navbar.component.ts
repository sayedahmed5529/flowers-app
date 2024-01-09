import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  lang: any ;
  constructor(private appService: AppService,
    public translate: TranslateService,) { 
      if ("language" in localStorage) {
        this.lang = localStorage.getItem('language');
        translate.use(this.lang);
        translate.setDefaultLang(this.lang);
        if(this.lang=='ar'){
          document.documentElement.dir = 'rtl';
          
        }else{
          document.documentElement.dir='ltr';
        }
        
    } else {
      translate.use(this.translate.defaultLang);
    }
   
  }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
  changeLanguage() {
    if (this.lang === 'en') {
      this.lang = 'ar';
      this.translate.use('ar');
      localStorage.setItem('language', 'ar');

      document.documentElement.dir = 'rtl';
    } else {
      this.lang = 'en';
      this.translate.use('en');
      localStorage.setItem('language', 'en');
      document.documentElement.dir ="ltr";
    }
  }

}
