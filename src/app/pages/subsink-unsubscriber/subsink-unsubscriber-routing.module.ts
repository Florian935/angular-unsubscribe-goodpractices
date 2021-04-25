import { SubsinkUnsubscriberComponent } from './component/subsink-unsubscriber.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: SubsinkUnsubscriberComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsinkUnsubscriberRoutingModule { }
