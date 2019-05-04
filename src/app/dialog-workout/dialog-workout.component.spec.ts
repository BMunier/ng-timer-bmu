import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWorkoutComponent } from './dialog-workout.component';

describe('DialogWorkoutComponent', () => {
  let component: DialogWorkoutComponent;
  let fixture: ComponentFixture<DialogWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
