import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SpaModule } from '../spa/spa.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CallbackComponent } from './callback/callback.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { HotToursComponent } from './hot-tours/hot-tours.component';
import { RequestTourComponent } from './request-tour/request-tour.component';
import { SearchTourComponent } from './search-tour/search-tour.component';
import { TriedToursComponent } from './tried-tours/tried-tours.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CallbackComponent,
    CommentsComponent,
    ContactsComponent,
    HotToursComponent,
    RequestTourComponent,
    SearchTourComponent,
    TriedToursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    FormsModule,
    SpaModule,
    NgbModule
  ],
  exports: [
    CommentsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
