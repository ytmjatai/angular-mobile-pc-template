import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HistoryModel } from '../../../models/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  histories: HistoryModel[] = [];
  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.histories = await this.dataSvc.queryHistories();
  }

}
