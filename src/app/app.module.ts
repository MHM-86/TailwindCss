import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, ChartsComponent, RightSidebarComponent, NavBarComponent],
  imports: [BrowserModule, NgApexchartsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
