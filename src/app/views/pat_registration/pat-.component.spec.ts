import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatRegistrationComponent } from './pat-.component';

describe('PatComponent', () => {
  let component: PatRegistrationComponent;
  let fixture: ComponentFixture<PatRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
