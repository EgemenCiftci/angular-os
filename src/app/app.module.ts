import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { LauncherComponent } from './launcher/launcher.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  declarations: [AppComponent, LauncherComponent, WindowComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
