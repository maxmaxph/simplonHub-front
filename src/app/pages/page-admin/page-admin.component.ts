import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent {
  tabUser: User[] = [];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      // On récupère tous les utilisateurs
      this.tabUser = data;
      console.log(this.tabUser);
    });
  }
}
