import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-tax-trend',
  templateUrl: './tax-trend.component.html',
  styleUrls: ['./tax-trend.component.scss']
})
export class TaxTrendComponent implements OnInit {

  @Input() trend: string | undefined = 'unknown';
  faCheck = faCheck;
  faQuestion = faQuestion;
  faTimes = faTimes;
  faArrowUp = faArrowUp;
  faArrowRight = faArrowRight;
  faArrowDown = faArrowDown;

  constructor() {
  }

  ngOnInit(): void {
  }

}
