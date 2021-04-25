import { SubSink } from 'subsink';
import { OnDestroy, Injectable } from '@angular/core';

@Injectable()
export abstract class UnsubscribeOnDestroyAdapter implements OnDestroy {
    subscriptions: SubSink = new SubSink();

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
