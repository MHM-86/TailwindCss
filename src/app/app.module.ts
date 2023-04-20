import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip'
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Search } from './right-sidebar/pipes/search-pipe';
import { Highlight } from './right-sidebar/pipes/highlight-match';
@NgModule({
  declarations: [AppComponent, ChartsComponent, RightSidebarComponent, NavBarComponent, Search, Highlight],
  imports: [BrowserModule, NgApexchartsModule, MatIconModule, MatTreeModule, MatTooltipModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
