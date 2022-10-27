import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationmoduleAddComponent } from './formationmodule-add.component';

describe('FormationmoduleAddComponent', () => {
  let component: FormationmoduleAddComponent;
  let fixture: ComponentFixture<FormationmoduleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationmoduleAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationmoduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
