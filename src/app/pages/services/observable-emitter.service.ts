import { Injectable, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableEmitterService {
    sourceEmitter$ = interval(1000);

    constructor() { }
}
