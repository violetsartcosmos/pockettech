import { Nav } from 'ionic-angular';
import { Component } from '@angular/core';

import { EnterPage } from '../enter/enter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: Nav) {
  }

  public goToEnterPage() {
    // Let's navigate from Home Page to Enter Page
    this.navCtrl.push(EnterPage);
 }
}
