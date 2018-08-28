import { Component, OnInit, Input } from '@angular/core';

import { environment as env } from '@env/environment';

@Component({
  selector: 'slo-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  // - Bindings -
  @Input() data: any;
  @Input() isVisible: boolean;

  // - Fields -
  title: string;
  message: string;
  environment: string;

  // - Ctor -
  constructor() { }

  // - OnInit -
  ngOnInit() {
    this.title = this.data && this.data.title || 'Test';
    this.message = this.data && this.data.message || 'Test message for banner system to display annoucements, errors, warning, etc.';
    this.environment = env.envName;
  }

  // - Functions -

}
