import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {GalleryModule} from "./carousel/gallery.module";
import { ContextComponent } from './context/context.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
