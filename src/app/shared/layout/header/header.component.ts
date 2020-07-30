import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { UIMessageService   } from '../../../app-communication/service/ui-message.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();

  constructor(public uiMessageService: UIMessageService) { }
  ngOnInit() {
  }

  toggleSideNav() {
    this.uiMessageService.expandedLeftSideNav = !this.uiMessageService.expandedLeftSideNav;
    this.toggle.emit(this.uiMessageService.expandedLeftSideNav);
  }
}
