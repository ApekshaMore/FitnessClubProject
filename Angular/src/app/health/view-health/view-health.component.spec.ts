import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHealthComponent } from './view-health.component';

describe('ViewHealthComponent', () => {
  let component: ViewHealthComponent;
  let fixture: ComponentFixture<ViewHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
