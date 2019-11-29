import { Injectable } from '@angular/core';

export interface Icons {
    imageFile: string
    url: string
    alt: string
    disabled?: boolean
}

export interface Logo {
  imgFile: string
  url: string
  alt: string
}

export interface Greeteings {
  slogan?: string
  head?: string
  text?: string
  route: string
}

export interface SpaConfigSettings {
    showUserControls?: boolean
    socialIcons?: Array<Icons>
    greetingText?: Array<Greeteings>
}

@Injectable({
  providedIn: 'root'
})
export class SpaConfigService {
  showUserControls = true;
  socialIcons = new Array<Icons>()
  greetingText = new Array<Greeteings>()

  configure(settings: SpaConfigSettings): void {
      Object.assign(this, settings)
  }

  constructor() { }
}
