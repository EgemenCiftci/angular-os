import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
})
export class WindowComponent implements OnInit {
  @Input() iconName: string = 'bi-window';
  @Input() title: string;
  @Input() src: any;
  @Input() id: number;

  constructor(private appService: AppService) {}

  ngOnInit() {}

  close() {
    this.appService.appComponent.removeWindow(this.id);
  }
}
