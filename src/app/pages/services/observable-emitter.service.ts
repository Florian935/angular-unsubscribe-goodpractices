import { Injectable, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableEmitterService implements OnDestroy {
    sourceEmitter$ = interval(1000);

    constructor() { }
    ngOnDestroy(): void {
        console.log('toto');
    }
}
