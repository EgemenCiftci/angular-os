import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

import { WindowComponent } from './components/window/window.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { ContentHostDirective } from './directives/content-host.directive';
import { LauncherComponent } from './components/main/launcher/launcher.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotepadComponent } from './components/notepad/notepad.component';
import { BrowserComponent } from './components/browser/browser.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    LauncherComponent,
    WindowComponent,
    SettingsComponent,
    NotepadComponent,
    BrowserComponent,
    ContentHostDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
