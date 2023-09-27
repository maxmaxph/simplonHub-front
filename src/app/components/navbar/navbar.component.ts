import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ChangeDetectorRef } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { AuthGuard } from 'src/app/guards/auth-guard.guard';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  roleId: number | undefined;
  isUserLoggedIn = false;
  private subscriptions: Subscription[] = [];
  
  constructor(
    private userService: UserService, 
    private authGuard: AuthGuard, 
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit() {
    this.authGuard.initializeUser();
    
    this.subscriptions.push(
      this.authGuard.currentUser.subscribe(user => {
        this.roleId = user.roleId;
        this.isUserLoggedIn = !!user;
        this.cdr.detectChanges(); // Forcer la détection de changements
      }),
      this.userService.userLoggedIn$.subscribe(isLoggedIn => {
        this.isUserLoggedIn = isLoggedIn;
        this.cdr.detectChanges(); // Forcer la détection de changements
      })
    );
  }
  
  closeOffcanvas(offcanvas: any): void {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }

    const overlay = document.querySelector('.offcanvas-backdrop.fade.show');
    if (overlay) {
      overlay.classList.remove('show');
    }
  }

  onLinkClick(offcanvas: any): void {
    this.closeOffcanvas(offcanvas);
  }

  onLogout(): void {
    this.userService.logout();
    this.userService.setLoggedIn(false);
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
