import { Component, OnInit } from '@angular/core';
import { DealModel } from '../../../models/deal';
import { DataService } from '../data.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {
  deals: DealModel[] = [];
  actions = [{
    "text": "Actions",
    "items": [
      {
        "text": "Edit"
      },
      {
        "text": "Delete"
      },
      {
        "text": "View"
      }
    ]
  }
  ]
  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.deals = await this.dataSvc.queryDeals();
  }


}
