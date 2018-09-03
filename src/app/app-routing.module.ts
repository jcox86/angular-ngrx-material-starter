import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// -- Feature Imports --
import { AboutComponent } from '@app/features/about/about.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

import { SettingsContainerComponent } from '@app/infrastructure/core/shared/components/settings';
import { AuthGuardService } from '@app/infrastructure/core/shared/guards/auth-guard.service';
import { RouterResolver } from '@app/infrastructure/core/shared/resolvers/router.resolver';

// -- Imported Features (Routes) --
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'slo.menu.dashboard.title', text: 'slo.menu.dashboard.text', icon: 'tachometer-alt', show: true },
    resolve: { about: RouterResolver }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'slo.menu.about.title', text: 'slo.menu.about.text', icon: 'at', show: true },
    resolve: { about: RouterResolver }
  },
  {
    path: 'settings',
    component: SettingsContainerComponent,
    data: { title: 'slo.menu.settings.title', text: 'slo.menu.settings.text', icon: 'line_style', show: false },
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
