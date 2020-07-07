import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from './layout.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { RxEventService } from '../../services/rx-event.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  isDrawerOpen = true;

  toggleDrawer$: Subscription
  constructor(
    private router: Router,
    public vm: LayoutService,
    private rxEvent: RxEventService
  ) { }

  ngOnInit(): void {
    this.toggleDrawer$ = this.rxEvent.on('toggle-drawer').subscribe(
      isOpen => this.vm.config.opened = isOpen
    );

  }

  ngOnDestroy() {
    this.toggleDrawer$.unsubscribe();
  }

  loadView(e) {
    // this.router.navigate([e.addedItems[0].filePath]);
    if (this.vm.config.shading) {
      this.vm.config.opened = false;
    }
  }

}
