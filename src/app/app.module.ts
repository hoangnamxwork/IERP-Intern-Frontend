import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';



@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    NgToastModule,
  ],
  providers: [
    AuthGuard,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
