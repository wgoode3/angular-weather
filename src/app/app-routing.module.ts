import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: View1Component },
  { path: 'weather/:location', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
