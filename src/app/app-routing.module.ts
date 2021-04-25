import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'take-until-destroyer',
        loadChildren: () =>
            import('./pages/take-until/take-until.module')
                .then(m => m.TakeUntilModule)
    },
    {
        path: 'take-until-no-unsubscribe',
        loadChildren: () =>
            import('./pages/take-until-no-unsubscribe/take-until-no-unsubscribe.module')
                .then(m => m.TakeUntilNoUnsubscribeModule)
    },
    {
        path: 'take-until-subscription',
        loadChildren: () =>
            import('./pages/take-until-subscription/take-until-subscription.module')
            .then( m => m.TakeUntilSubscriptionModule)
    },
    {
        path: 'take-until-destroyer-without-ng-on-destroy',
        loadChildren: () =>
            import('./pages/take-until-destroyer-without-ng-on-destroy/take-until-destroyer-without-ng-on-destroy.module')
            .then( m => m.TakeUntilDestroyerWithoutNgOnDestroyModule)
    },
    {
        path: 'subsink-unsubscriber',
        loadChildren: () =>
            import('./pages/subsink-unsubscriber/subsink-unsubscriber.module')
                .then( m => m.SubsinkUnsubscriberModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
