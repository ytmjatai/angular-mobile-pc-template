import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  docs = [];
  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    this.docs = await this.dataSvc.queryDocs();
  }

  onDownload(doc) {
    console.log(doc);
    return;
  }

}
