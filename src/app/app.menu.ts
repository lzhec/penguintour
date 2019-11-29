import {MenuItem} from '../spa/services/menu.service';
export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Главная',
    route: '/',
    header: false,
    footer: true
  },
  {
    text: 'О нас',
    route: '/aboutUs',
    header: true,
    footer: true
  },
  {
    text: 'Новости',
    route: '/news',
    header: false,
    footer: true
  },
  {
    text: 'Проверенные туры',
    route: '/triedTours',
    header: true,
    footer: false
  },
  {
    text: 'Поиск тура',
    route: '/searchTour',
    header: true,
    footer: true
  },
  {
    text: 'Горячие туры',
    route: '/hotTours',
    header: true,
    footer: false
  },
  {
    text: 'Контакты',
    route: '/contacts',
    header: true,
    footer: true
  }
]
