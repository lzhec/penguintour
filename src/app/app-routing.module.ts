import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CallbackComponent } from './callback/callback.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { HotToursComponent } from './hot-tours/hot-tours.component';
import { RequestTourComponent } from './request-tour/request-tour.component';
import { SearchTourComponent } from './search-tour/search-tour.component';
import { TriedToursComponent } from './tried-tours/tried-tours.component';


export const routes: Routes = [
  {path: 'aboutUs', component: AboutUsComponent, data: {animation: 'left-left'}},
  {path: 'contacts', component: ContactsComponent, data: {animation: 'right-right'}},
  {path: 'home', component: HomeComponent, data: {animation: 'center'}},
  {path: 'hotTours', component: HotToursComponent, data: {animation: 'right'}},
  {path: 'requestTour', component: RequestTourComponent},
  {path: 'searchTour', component: SearchTourComponent, data: {animation: 'center'}},
  {path: 'triedTours', component: TriedToursComponent, data: {animation: 'left'}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
