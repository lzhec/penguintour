import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  url = 'http://localhost:8000'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  private loadScript(str: string): Observable<void> {
    return new Observable((observer) => {
      const script = document.createElement('script')
      script.async = true
      script.type = 'text/javascript'
      script.innerHTML = str
      script.addEventListener('load', () => {
        observer.next()
        observer.complete()
      })

      document.head.appendChild(script)
    })
  }

  public createRequest(data): Observable<any> {
    if (data.comments === null) data.comments = ''
    // let csrf_token = document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    const body = {name: data.name, tel: data.tel, email: data.email, comment: data.comments}
    return this.http.post(this.url + '/request/', body, {headers: this.httpHeaders})
  }

  public loadResource(src: string): Observable<void> {
    return new Observable((observer) => {
      const script = document.createElement('script')
      script.async = true
      script.type = 'text/javascript'
      script.src = src
      script.addEventListener('load', () => {
        observer.next()
        observer.complete()
      })

      document.head.appendChild(script)
    })
  }

  private patchDocumentWrite(id: string): void {
    document.write = (input: string): void => {
      document.getElementById(id).innerHTML += input
    }
  }

  private patchDocumentWrite5(): void {
    document.write = (input: string): void => {
      document.body.innerHTML += input
    }
  }

  public loadExternalResources(component: string): Observable<void> {
    if (!Element.prototype.remove) {
      Element.prototype.remove = function remove() {
        if (this.parentNode) {
          this.parentNode.removeChild(this)
        }
      }
    }

    const elem = document.getElementsByTagName('iframe')


    for (var i = 0; i < elem.length; i++) {
      elem[i].remove()
    }

    switch (component) {
      case 'home':
        return of(null).pipe(
          tap(() => this.patchDocumentWrite('home')),
          switchMap(() => this.loadResource('https://front.sletat.ru/modules/module6/latest/module.js')),
          tap(() => this.patchDocumentWrite('tourmometr')),
          switchMap(() => this.loadResource('assets/scripts/tourmometr.js'))
        )
        break

      case 'search-tour':
        return of(null).pipe(
          tap(() => this.patchDocumentWrite('search-container')),
          switchMap(() => this.loadResource('assets/scripts/search.js')),
          tap(() => this.patchDocumentWrite('shopwindow-container')),
          switchMap(() => this.loadResource('assets/scripts/shopwindow.js'))
        )
        break

      case 'tried-tours':
        return of(null).pipe(
          tap(() => this.patchDocumentWrite('tried-container')),
          switchMap(() => this.loadResource('assets/scripts/triedTours.js'))
        )
        break

      case 'hot-tours':
        return of(null).pipe(
          tap(() => this.patchDocumentWrite('hot-container')),
          switchMap(() => this.loadResource('assets/scripts/hotTours.js'))
        )
        break

      case 'comments':
        return of(null).pipe(
          tap(() => this.patchDocumentWrite('vk_comments')),
          // switchMap(() => this.loadResource('assets/scripts/facebookPlugin.js'))
          switchMap(() => this.loadScript('VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});'))
        )
        break

      case 'callback':
        return of(null).pipe(
          tap(() => this.patchDocumentWrite('callback-plugin')),
          switchMap(() => this.loadResource('assets/scripts/callbackPlugin.js'))
        );
        break
    }
  }
}
