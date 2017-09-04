import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EditorComponent } from './editor.component';
import { MonacoEditorComponent } from 'ng2-monaco-editor';
import { CodemirrorModule } from 'ng2-codemirror';

@NgModule({
  declarations: [
    EditorComponent,
    MonacoEditorComponent,
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
  ],
  providers: [],
  bootstrap: [
    EditorComponent,
  ]
})
export class EditorModule { }
