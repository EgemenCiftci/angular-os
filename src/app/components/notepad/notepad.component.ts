import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css'],
})
export class NotepadComponent implements OnInit {
  text: string;

  constructor() {}

  ngOnInit() {}

  open(event: any) {
    const reader = new FileReader();
    reader.readAsText(event.file);
  }

  async save() {
    const handle = await (window as any).showSaveFilePicker();
  }
}
