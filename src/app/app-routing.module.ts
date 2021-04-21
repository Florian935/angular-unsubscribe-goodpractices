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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
