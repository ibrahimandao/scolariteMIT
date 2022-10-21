import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormsComponent } from './formation-forms.component';

describe('FormationFormsComponent', () => {
  let component: FormationFormsComponent;
  let fixture: ComponentFixture<FormationFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
