import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  // Set data to localStorage
  setData(dataKey: string, dataObj: object) {
    localStorage.setItem(dataKey, JSON.stringify(dataObj));
  }

  // Get data from localstorage
  getData(key: string) {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }
  }
}
