import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private translate: TranslateService, private titleService: Title) {
    translate.setDefaultLang('it');
    translate.use('it');
    titleService.setTitle('Remote');
  }
}
