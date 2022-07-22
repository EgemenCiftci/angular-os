import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  get backgroundStyle(): string {
    let val = localStorage.getItem('backgroundStyle');
    if (!val) {
      val = 'blue';
      localStorage.setItem('backgroundStyle', val);
    }
    return val;
  }

  set backgroundStyle(val: string) {
    if (val !== localStorage.getItem('backgroundStyle')) {
      localStorage.setItem('backgroundStyle', val);
    }
  }

  constructor() {}

  ngOnInit() {}
}
