import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ideas', url: '', icon: 'bulb' },
    { title: 'Give idea', url: '/create', icon: 'paper-plane' },
  ];
  constructor() {}
}
