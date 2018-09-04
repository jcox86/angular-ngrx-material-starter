import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';

@Component({
  selector: 'slo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // - Fields -
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  sourceControl = env.sourceControlLink;
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
