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

  save() {
    if (this.text) {
      let element = document.createElement('a');
      element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(this.text)
      );
      element.setAttribute('download', this.fileName);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }
}
