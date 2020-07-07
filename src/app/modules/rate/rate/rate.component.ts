import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  rates = [];
  constructor(
    public globalSvc: GlobalService,
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

 
  async loadData() {
    this.rates = await this.dataSvc.queryRates();
  }

  initAccordion(e) {
    // e.component.expandItem(0);
    // e.component.expandItem(1);
  }


}
