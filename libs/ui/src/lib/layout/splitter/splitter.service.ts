import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiLayoutSplitterService {
  public setData(key: string, data: object) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getData(key: string): object | null {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }
}
