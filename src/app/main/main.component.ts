import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild('windowHost', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private appService: AppService) {
    appService.container = this.container;
  }

  ngOnInit() {}
}
