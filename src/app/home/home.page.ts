import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async openBrowser(){
    await Browser.open({ url: 'https://healthuapp.com/app/list/set1' });
    Browser.addListener('browserFinished', () => {});
}
}