import { Component } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  code = 'console.log(\'hello world\');';
  language = 'typescript';
}
