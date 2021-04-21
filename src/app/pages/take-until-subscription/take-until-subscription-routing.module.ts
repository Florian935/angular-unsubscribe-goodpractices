import { TakeUntilSubscriptionComponent } from './components/take-until-subscription.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: TakeUntilSubscriptionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeUntilSubscriptionRoutingModule { }
