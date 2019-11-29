import { Component } from '@angular/core';
import { SpaConfigService, SpaConfigSettings, Icons } from '../spa/services/spa-config.service';
import { MenuService } from '../spa/services/menu.service';
import { AppMenuItems } from './app.menu';
import { AboutUsDescService } from '../spa/services/about-us-desc.service';
import { AppAboutUsDescItems } from './app.aboutUsDesc';
import { AppDataService } from './services/app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private appDataService: AppDataService, private spaConfigService: SpaConfigService, private menuService: MenuService, private aboutUsDescService: AboutUsDescService) {
    const config: SpaConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/img/facebook2.svg', alt: 'Facebook', url: 'http://facebook.com', disabled: true},
        {imageFile: 'assets/img/instagram2.svg', alt: 'Instargram', url: 'http://www.instagram.com'},
        {imageFile: 'assets/img/vk2.svg', alt: 'vk', url: 'http://vk.com'},
        {imageFile: 'assets/img/telegram.svg', alt: 'Telegram', url: 'https://t.me/penguin_tours'},
        {imageFile: 'assets/img/whatsapp.svg', alt: 'Whatsapp', url: 'http://www.whatsapp.com', disabled: true},
        {imageFile: 'assets/img/youtube2.svg', alt: 'Youtube', url: 'http://www.youtube.com', disabled: true},
      ],
      greetingText: [
        {
          slogan: 'Хочешь красиво отдохнуть?\n' +
            'Спроси нас как!',
          route: '/home'
        },
        {
          head: 'ПОЧЕМУ МЫ',
          route: '/aboutUs'
        },
        {
          head: 'ТУРЫ ДНЯ',
          text: 'Предлагаем Вам ознакомиться с горящими турами с вылетом из Иркутска. Если не подходит ни один тур, позвоните или напишите нам, возможно на нужные Вам даты есть скидки или акции!',
          route: '/triedTours'
        },
        {
          head: 'ПОИСК ТУРА',
          text: 'Если вы опытный путешественник, здесь вы сможете подобрать себе тур самостоятельно. Но помните, если возникнут вопросы, наши специалисты с удовольствием помогут вам!',
          route: '/searchTour'
        },
        {
          head: 'ГОРЯЩИЕ ТУРЫ',
          text: 'Самые горячие предложения с самыми вкусными скидками на ближайшие даты.',
          route: '/hotTours'
        }
      ],
      showUserControls: true
    }
    spaConfigService.configure(config)
    menuService.items = AppMenuItems
    aboutUsDescService.items = AppAboutUsDescItems

    // this.appDataService.loadResource('assets/scripts/clientChat.js').subscribe(() => {
    //   console.log('!')
    // })
  }
  title = 'penguintour'
}
