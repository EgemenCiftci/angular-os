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
    reader.onload = (f) => (this.text = f.target.result as string);
    reader.readAsText(event.target.files[0]);
  }

  async save() {
    const handle = await (window as any).showSaveFilePicker();
  }
}
