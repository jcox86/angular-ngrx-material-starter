import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -- Feature Imports --
import { CreateComponent } from '@app/features/create/create.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

import { SettingsContainerComponent } from '@app/infrastructure/core/shared/components/settings';
import { AuthGuardService } from '@app/infrastructure/core/shared/guards/auth-guard.service';
import { RouterResolver } from '@app/infrastructure/core/shared/resolvers/router.resolver';
import { CanDeactivateGuard } from '@app/infrastructure/core/shared/guards/can-deactivate-guard.service';
import { NotificationsContainerComponent } from '@app/infrastructure/core/shared/components/notifications/components/notifications-container.component';

// -- Imported Features (Routes) --
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'slo.menu.dashboard.title', text: 'slo.menu.dashboard.text', icon: 'tachometer-alt', show: true },
    resolve: { about: RouterResolver }
  },
  {
    path: 'create',
    component: CreateComponent,
    data: { title: 'slo.menu.create.title', text: 'slo.menu.create.text', icon: 'at', show: true },
    resolve: { about: RouterResolver },
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'slo.menu.settings.title', text: 'slo.menu.settings.text', icon: 'line_style', show: false },
    resolve: { settings: RouterResolver },
    canActivate: [AuthGuardService]
  },
  {
    path: 'notifications',
    component: NotificationsContainerComponent,
    data: { title: 'slo.menu.settings.title', text: 'slo.menu.notifications.text', show: false },
    resolve: { settings: RouterResolver },
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
