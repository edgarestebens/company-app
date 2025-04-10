import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JrSideMenuComponent, TitleColor } from 'jr-side-menu';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, JrSideMenuComponent],
  templateUrl: './admin-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {

  isAuthenticated = signal(false);

  TitleColor = TitleColor;

  onLogin() {
    this.isAuthenticated.set(true);
  }

  onLogout() {
    this.isAuthenticated.set(false);
  }

}
