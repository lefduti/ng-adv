import { Component, OnInit, inject } from '@angular/core';
import { SimpleAuthService } from '../simple-auth.service';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-simple-auth-fake-async',
  templateUrl: './simple-auth-fake-async.component.html',
  styleUrls: ['./simple-auth-fake-async.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
  ],
})
export class SimpleAuthFakeAsyncComponent implements OnInit {
  auth = inject(SimpleAuthService);
  needsLogin = true;

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.needsLogin = !isAuth;
    });
  }
}
