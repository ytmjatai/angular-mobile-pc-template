import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RxEventService } from '../../services/rx-event.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  menus = [
    { id: 1, text: "Rate", icon: "money", link: "rate" },
    { id: 2, text: "Docs", icon: "file", link: "docs" },
    { id: 3, text: "Deal", icon: "card", link: "deal" },
    { id: 4, text: "History", icon: "orderedlist", link: "history" },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rxEvent: RxEventService,
    private globalSc: GlobalService
  ) { }

  ngOnInit(): void {
  }

  initialized(e) {
    const link = location.pathname;
    const idx = this.menus.findIndex(m => m.link === link);
    e.component.selectItem(idx)


  }

  onItemClick(e) {
    this.router.navigate([e.itemData.link], { relativeTo: this.route });

    if (this.globalSc.isMobile$.getValue()) {
      this.rxEvent.publish('toggle-drawer', false);
    }
  }

}
