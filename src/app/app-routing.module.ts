import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
{
    path: 'welcome',
    loadChildren: () => import('../app/auth/auth.module').then((m) => m.AuthModule),
},
{
  path: '',
  redirectTo: 'welcome',
  pathMatch: "full"
},
{
  path: 'dashboard',
  loadChildren: () => import('../app/pages/dashboard/dashboard.component').then((m) => DashboardModule),
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
