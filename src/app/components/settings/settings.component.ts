import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  get backgroundColor(): string {
    let val = localStorage.getItem('backgroundColor');
    if (!val) {
      val = 'transparent';
      localStorage.setItem('backgroundColor', val);
    }
    return val;
  }

  set backgroundColor(val: string) {
    if (val !== localStorage.getItem('backgroundColor')) {
      localStorage.setItem('backgroundColor', val);
    }
  }

  get backgroundImage(): string {
    let val = localStorage.getItem('backgroundImage');
    if (!val) {
      val = 'none';
      localStorage.setItem('backgroundImage', val);
    }
    return val;
  }

  set backgroundImage(val: string) {
    if (val !== localStorage.getItem('backgroundImage')) {
      localStorage.setItem('backgroundImage', val);
    }
  }

  get backgroundRepeat(): string {
    let val = localStorage.getItem('backgroundRepeat');
    if (!val) {
      val = 'repeat';
      localStorage.setItem('backgroundRepeat', val);
    }
    return val;
  }

  set backgroundRepeat(val: string) {
    if (val !== localStorage.getItem('backgroundRepeat')) {
      localStorage.setItem('backgroundRepeat', val);
    }
  }

  get backgroundAttachment(): string {
    let val = localStorage.getItem('backgroundAttachment');
    if (!val) {
      val = 'scroll';
      localStorage.setItem('backgroundAttachment', val);
    }
    return val;
  }

  set backgroundAttachment(val: string) {
    if (val !== localStorage.getItem('backgroundAttachment')) {
      localStorage.setItem('backgroundAttachment', val);
    }
  }

  get backgroundPosition(): string {
    let val = localStorage.getItem('backgroundPosition');
    if (!val) {
      val = '0% 0%';
      localStorage.setItem('backgroundPosition', val);
    }
    return val;
  }

  set backgroundPosition(val: string) {
    if (val !== localStorage.getItem('backgroundPosition')) {
      localStorage.setItem('backgroundPosition', val);
    }
  }

  constructor() {}

  ngOnInit() {}
}
