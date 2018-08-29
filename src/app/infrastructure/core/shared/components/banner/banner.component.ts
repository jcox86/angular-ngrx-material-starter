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
  type: string;
  environment: string;

  // - Ctor -
  constructor() { }

  // - OnInit -
  ngOnInit() {
    // TODO: Set up with API service to get show/hide notifications from database?
    this.title = this.data && this.data.title || 'Test';
    // tslint:disable-next-line:max-line-length
    this.message = this.data && this.data.message || 'On Thursday, March 22, 2018 between 11:30 AM and 2:00 PM, the CJIS Portal and LWS will be unavailable to install the latest release, including the new version of the CJIS Portal. For more information and to preview new features, please visit our test environment. Note: you may be prompted for your username and password.';
    this.environment = env.envName;
    this.type = this.message.length > 200 ? 'rgba(255, 0, 0, 0.2)' : 'rgba(102, 204, 255, 0.6)';
  }

  // - Functions -

}
