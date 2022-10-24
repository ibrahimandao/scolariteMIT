import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationUpdateFormComponent } from './formation-update-form.component';

describe('FormationUpdateFormComponent', () => {
  let component: FormationUpdateFormComponent;
  let fixture: ComponentFixture<FormationUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
