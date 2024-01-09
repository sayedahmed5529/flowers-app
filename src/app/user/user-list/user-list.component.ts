import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { User } from 'app/interfaces/user';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private ngUnSubscribe: Subject<void> = new Subject<void>();

  Users: User[] = [];
  filteredUsers: User[] = [];
  itemsPerPage = 2;
  q: any
  //
  constructor(private userService: UserService, private _router: Router
    , private authService: AuthService,
    private _modal: BsModalService,
    public translate: TranslateService,
    private _toast: ToastrService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');


  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }
  onDeleteUser(id: number) {

    if (this.authService.isAdmin()) {
      // Only allow admin users to delete other users.
      this.userService.deleteUser(id);
      this.getUsers();
    } else {
      // Handle unauthorized access or show an error message.
      this._router.navigate(['/access-denied']);

    }

  }
  onSearch(query: string, column: string) {
    if (column == 'phone') {
      this.filteredUsers = this.Users.filter(
        (user) =>
          user.phone.includes(query)
      );
    }
    if (column == 'id') {
      this.filteredUsers = this.Users.filter(
        (user) =>
          user.id.toString().includes(query)
      );
    }
  }
  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.Users = users;
      this.filteredUsers = users;

    });
  }
  filterAreaFlag: boolean = false
  showFilterArea() {
    this.filterAreaFlag = !this.filterAreaFlag
  }


  //#region popup form
  modalRef?: BsModalRef;
  selectedUser!: any;
  addNew(template: TemplateRef<any>) {
    this.selectedUser = null;
    this.modalRef = this._modal.show(template, { class: 'modal-lg' });
  }
  updateDat(user: any, template: TemplateRef<any>) {
    this.selectedUser = user;
    this.modalRef = this._modal.show(template, { class: 'modal-lg' });
  }
  //#endregion

  updateUser(user: User) {
    this._router.navigateByUrl(`/users/user/${user.id}`)
  }
  saveUserData(user: User) {
    if (user?.id) {
      console.log('update', user);
      let userData: any = this.Users.find(el => el.id == user.id);
      userData.name = user.name;
      userData.email = user.email;
      userData.phone = user.phone;
      userData.userType = user.userType;
    } else {
      user.id = this.Users.length + 1
      this.Users.push(user);

    }
    // this.rows = this.temp;
    this.getUsers();
    this._toast.success(this.translate.instant('UserSavedSuccessfully'), this.translate.instant('UserData'));

  }


}
