import { Component, Input, LOCALE_ID } from '@angular/core';
import { User } from 'src/app/models/user';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { UserService } from 'src/app/services/user.service';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }]
})
export class AdmintableComponent {
  @Input()
  tabUser: User[] = [];

  constructor(private userService: UserService) { }

  deleteUser(id: number): void {
    console.log(id);
    this.userService.softDeleteUser(id).subscribe(
    response => {
        console.log("Soft delete réussi", response);
    },
    error => {
      console.error("Erreur lors du soft delete", error);
    }
  );
  }
}