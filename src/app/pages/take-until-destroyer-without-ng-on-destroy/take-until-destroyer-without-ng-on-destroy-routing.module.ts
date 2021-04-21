import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeUntilDestroyerWithoutNgOnDestroyComponent } from './components/take-until-destroyer-without-ng-on-destroy.component';

const routes: Routes = [
    {
        path: '',
        component: TakeUntilDestroyerWithoutNgOnDestroyComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeUntilDestroyerWithoutNgOnDestroyRoutingModule { }
