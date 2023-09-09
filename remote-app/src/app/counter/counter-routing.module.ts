import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { NumberCounterComponent } from './number-counter/number-counter.component';
import { AgeCounterComponent } from './age-counter/age-counter.component';

const routes: Routes = [
  {
    path: "", //localhost:4200/counter
    component: CounterComponent, 
    children: [
      {
        path: "number", component: NumberCounterComponent  //localhost:4200/counter/number
      },
      {
        path: "age", component: AgeCounterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
