import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsinkUnsubscriberComponent } from './subsink-unsubscriber.component';

describe('SubsinkUnsubscriberComponent', () => {
  let component: SubsinkUnsubscriberComponent;
  let fixture: ComponentFixture<SubsinkUnsubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsinkUnsubscriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsinkUnsubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
