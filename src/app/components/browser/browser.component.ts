import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css'],
})
export class BrowserComponent implements OnInit {
  @Input() title: string;

  srcVal: string;
  safeSrc: SafeUrl;

  get src(): string {
    return this.srcVal;
  }

  set src(val: string) {
    this.srcVal = val;
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcVal);
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}
}
