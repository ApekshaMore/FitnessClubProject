import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerDetailsComponent } from './trainer-details.component';

describe('TrainerDetailsComponent', () => {
  let component: TrainerDetailsComponent;
  let fixture: ComponentFixture<TrainerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
