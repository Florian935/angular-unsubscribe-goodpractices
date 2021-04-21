import { TakeUntilNoUnsubscribeComponent } from './components/take-until-no-unsubscribe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: TakeUntilNoUnsubscribeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TakeUntilNoUnsubscribeRoutingModule { }
