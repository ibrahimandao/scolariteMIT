import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationmoduleComponent } from './formationmodule.component';

describe('FormationmoduleComponent', () => {
  let component: FormationmoduleComponent;
  let fixture: ComponentFixture<FormationmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
