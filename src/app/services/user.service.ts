import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users: User[] = [
    {
      id: 1,
      name: 'ahmed',
      email: 'ahmed@test.com',
      phone: '4353453543',
      status: 'active',
      username: 'ahmed',
      password: "123",
      role: "admin"
    },
    {
      id: 2,
      name: 'omar',
      email: 'omar@test.com',
      phone: '372636722',
      status: 'active',
      username: 'omar',
      password: "123",
      role: "user"
    },
    {
      id: 3,
      name: 'ali',
      email: 'c@test.com',
      phone: '82736',
      status: 'soft_deleted',
      username: 'ali',
      password: "123"
    },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find((user) => user.id === id));
  }

  updateUser(user: User): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
  deleteUser(id: number) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users[index].status = 'soft_deleted';
    }

  }
  addUser(user: User) {
    this.users.push(user)
    return (this.users)
  }
}
