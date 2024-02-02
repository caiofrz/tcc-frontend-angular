import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RoomsModule } from './pages/rooms/rooms.module';
import { AppMaterialModule } from './shared/modules/app-material/app-material.module';
import { AppPrimengModule } from './shared/modules/app-primeng/app-primeng.module';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppPrimengModule,
    RoomsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
