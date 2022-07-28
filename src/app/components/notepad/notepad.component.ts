import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css'],
})
export class NotepadComponent implements OnInit {
  text: string;
  fileName = 'file.txt';

  constructor() {}

  ngOnInit() {}

  open(event: any) {
    const reader = new FileReader();
    reader.onload = (f) => (this.text = f.target.result as string);
    reader.readAsText(event.target.files[0]);
  }

  save() {}
}
