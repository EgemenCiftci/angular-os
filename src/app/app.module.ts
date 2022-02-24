import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { LauncherComponent } from './main/launcher/launcher.component';
import { WindowComponent } from './window/window.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './main/settings/settings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    LauncherComponent,
    WindowComponent,
    SettingsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
