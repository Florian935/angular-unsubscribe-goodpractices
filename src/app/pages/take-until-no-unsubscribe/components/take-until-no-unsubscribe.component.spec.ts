import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilNoUnsubscribeComponent } from './take-until-no-unsubscribe.component';

describe('TakeUntilNoUnsubscribeComponent', () => {
  let component: TakeUntilNoUnsubscribeComponent;
  let fixture: ComponentFixture<TakeUntilNoUnsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeUntilNoUnsubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilNoUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
