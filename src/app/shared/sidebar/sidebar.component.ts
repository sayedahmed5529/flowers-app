import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  test() { 
    this._router.navigateByUrl('/user/userList')
  }

}
