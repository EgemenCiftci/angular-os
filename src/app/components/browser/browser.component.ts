import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css'],
})
export class BrowserComponent implements OnInit {
  @Input() src: string;
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
