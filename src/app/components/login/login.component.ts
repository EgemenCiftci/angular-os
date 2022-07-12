import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = 'test@test.com';
  password: string = 'test';

  constructor() {}

  ngOnInit() {}

  login() {}
}
