import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningcourssemaineComponent } from './planningcourssemaine.component';

describe('PlanningcourssemaineComponent', () => {
  let component: PlanningcourssemaineComponent;
  let fixture: ComponentFixture<PlanningcourssemaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningcourssemaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningcourssemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
