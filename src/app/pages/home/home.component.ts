import { Component, OnInit } from '@angular/core';
import { TaxRepositoryService } from '../../shared/tax-model/tax-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public taxRepositoryService: TaxRepositoryService,
  ) {
  }

  ngOnInit(): void {
  }

}
