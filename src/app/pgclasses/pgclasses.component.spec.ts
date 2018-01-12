import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgclassesComponent } from './pgclasses.component';

describe('PgclassesComponent', () => {
  let component: PgclassesComponent;
  let fixture: ComponentFixture<PgclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
