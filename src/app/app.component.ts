import browser from 'browser-detect';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routes } from './app-routing.module';
import {
  AnimationsService,
  selectAuth, // <---- TODO: Remove store stuff
  routeAnimations,
  AppState // <---- TODO: Remove store stuff
} from '@app/infrastructure/core';

import { TitleService } from '@app/infrastructure/services/title.service';

import { ActionNavigationSideClose } from '@app/infrastructure/navigation/navigation.actions'; // <---- TODO: Remove store stuff
import { ActionContextSideClose } from '@app/infrastructure/navigation/navigation.actions'; // <---- TODO: Remove store stuff
import { selectNavigationSide } from '@app/infrastructure/navigation/navigation.selectors'; // <---- TODO: Remove store stuff
import { selectContextSide } from '@app/infrastructure/navigation/navigation.selectors'; // <---- TODO: Remove store stuff

import {
  selectSettings, // <---- TODO: Remove store stuff
  SettingsState, // <---- TODO: Remove store stuff
  ActionSettingsChangeAnimationsPageDisabled // <---- TODO: Remove store stuff
} from './infrastructure/core/shared/components/settings';
import { ContextSideDirective } from '@app/infrastructure/core/shared/directives/context-side.directive';
import { ContextComponent } from '@app/infrastructure/classes/interfaces/context-component';
import { selectContextItem } from '@app/infrastructure/core/shared/shared.selectors'; // <---- TODO: Remove store stuff
import { LogService } from '@app/infrastructure/services/log.service';

@Component({
  selector: 'slo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, OnDestroy {
  // - Bindings -
  @HostBinding('class') componentCssClass;
  @ViewChild(ContextSideDirective) contextHost: ContextSideDirective;

  // - Fields -
  private unsubscribe$: Subject<void> = new Subject<void>();
  navigationSideMenu = [];
  settings: SettingsState;
  isAuthenticated: boolean;
  isNavigationSideOpen: boolean;
  isContextSideOpen: boolean;

  // - Ctor -
  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<AppState>,
    private router: Router,
    private titleService: TitleService,
    private animationService: AnimationsService,
    private translate: TranslateService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private log: LogService
  ) {
    for (const route of routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1 && route.data.show) {
        this.navigationSideMenu.push({
          name: route.data.text,
          path: '/' + route.path,
          icon: route.data.icon
        });
      }
    }
  }

  private static isIEorEdge() {
    return ['ie', 'edge'].includes(browser().name);
  }

  // - OnInit
  ngOnInit(): void {
    this.log.info('App component started');
    this.translate.setDefaultLang('en');
    this.subscribeToSettings();
    this.subscribeToIsAuthenticated();
    this.subscribeToIsNavigationSideOpen();
    this.subscribeToIsContextSideOpen();
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // - Functions -
  public closeNavigationSide() {
    this.store.dispatch(new ActionNavigationSideClose());
  }

  public closeContextSide() {
    this.store.dispatch(new ActionContextSideClose());
  }

  private fillContextSide(item: any) {
    // https://angular.io/guide/dynamic-component-loader
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

    const viewContainerRef = this.contextHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    // - dynamic components must implements ContextComponent
    // - dynamic components must be defined as entryComponents in app.module.ts
    (<ContextComponent>componentRef.instance).data = item.data;
  }

  private subscribeToContextSideData() {
    this.store
      .pipe(select(selectContextItem), takeUntil(this.unsubscribe$))
      .subscribe(item => (this.fillContextSide(item)));
  }

  private subscribeToIsAuthenticated() {
    this.store
      .pipe(select(selectAuth), takeUntil(this.unsubscribe$))
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }

  private subscribeToIsNavigationSideOpen() {
    this.store
      .pipe(select(selectNavigationSide), takeUntil(this.unsubscribe$))
      .subscribe(navigationSide => (this.isNavigationSideOpen = navigationSide.isOpen));
  }

  private subscribeToIsContextSideOpen() {
    this.store
      .pipe(select(selectContextSide), takeUntil(this.unsubscribe$))
      .subscribe(contextSide => (this.isContextSideOpen = contextSide.isOpen));
  }

  private subscribeToSettings() {
    if (AppComponent.isIEorEdge()) {
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }
    this.store
      .pipe(select(selectSettings), takeUntil(this.unsubscribe$))
      .subscribe(settings => {
        this.settings = settings;
        this.setTheme(settings);
        this.setLanguage(settings);
        this.animationService.updateRouteAnimationType(
          settings.pageAnimations,
          settings.elementsAnimations
        );
      });
  }

  private setTheme(settings: SettingsState) {
    const { theme } = settings;
    const effectiveTheme = theme.toLowerCase();
    this.componentCssClass = effectiveTheme;
    const classList = this.overlayContainer.getContainerElement().classList;
    const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(effectiveTheme);
  }

  private setLanguage(settings: SettingsState) {
    const { language } = settings;
    if (language) {
      this.translate.use(language);
    }
  }

  private subscribeToRouterEvents() {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe(event => {
      if (event instanceof ActivationEnd) {
        this.titleService.setTitle(event.snapshot);
      }
    });
  }
}
