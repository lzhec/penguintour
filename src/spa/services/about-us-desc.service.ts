import { Injectable } from '@angular/core';

export interface DescItem {
  title: string
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class AboutUsDescService {
  items: Array<DescItem>

  constructor() { }
}
