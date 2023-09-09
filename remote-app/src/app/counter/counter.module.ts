import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { NumberCounterComponent } from './number-counter/number-counter.component';
import { AgeCounterComponent } from './age-counter/age-counter.component';


@NgModule({
  declarations: [
    CounterComponent,
    NumberCounterComponent,
    AgeCounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ],
  exports: [
    CounterComponent,
    NumberCounterComponent,
    AgeCounterComponent
  ]
})
export class CounterModule { }
