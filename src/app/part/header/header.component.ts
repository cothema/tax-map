import { Component, OnInit } from '@angular/core';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faHandHoldingUsd = faHandHoldingUsd;
  lang = 'cs';

  constructor(
    private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  onChangeLang(): void {
    this.translate.use(this.lang);
    localStorage.setItem('app.lang', this.lang);
  }
}
