import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Style {
  name: string
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private readonly _comutedStyle = new BehaviorSubject<any>(null)
  textFilter$: Observable<any> = this._comutedStyle.asObservable()

  private computedStyle: any

  constructor() {
    let root = document.querySelector(':root')
    this.computedStyle = getComputedStyle(root!)

    // console.log(this.getSpecificStyle('--primary'))
  }

  addStyleVariables() {

  }

  getStyleVariables(): any {
    return ''
  }

  getSpecificStyle(name: string): Style {
    console.log(this.computedStyle.getPropertyValue(name))
    let value = this.computedStyle.getPropertyValue(name)
    let style: Style = { name, value }

    // this.computedStyle.getPropertyValue(name)
    return style
  }
}