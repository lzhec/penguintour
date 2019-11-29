import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { MenuComponent } from './menu/menu.component';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { ScreenSmallDirective } from './directives/screen-small.directive';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';
import { SpaConfigService } from './services/spa-config.service';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';
import { GreetingBarComponent } from './greeting-bar/greeting-bar.component';
import { RequestFieldComponent } from './dynamicForms/dynamicFields/request-field/request-field.component';
import { RequestFormComponent } from './dynamicForms/dynamicForms/request-form/request-form.component';
import { AboutUsDescComponent } from './about-us-desc/about-us-desc.component';
import { AboutUsDescItemComponent } from './about-us-desc-item/about-us-desc-item.component';
import { AboutUsDescService } from './services/about-us-desc.service';
import { FooterMenuItemComponent } from './footer-menu-item/footer-menu-item.component';

@NgModule({
  declarations: [
    IconBarComponent,
    MenuComponent,
    SpaBodyComponent,
    SpaContentComponent,
    SpaFooterComponent,
    SpaHeaderComponent,
    ScreenLargeDirective,
    ScreenSmallDirective,
    MenuItemComponent,
    PopupMenuComponent,
    GreetingBarComponent,
    RequestFieldComponent,
    RequestFormComponent,
    AboutUsDescComponent,
    AboutUsDescItemComponent,
    FooterMenuItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    SpaBodyComponent,
    ScreenLargeDirective,
    ScreenSmallDirective,
    RequestFormComponent,
    AboutUsDescComponent
  ],
  providers: [
    ScreenService,
    MenuService,
    SpaConfigService,
    AboutUsDescService
  ]
})
export class SpaModule { }
