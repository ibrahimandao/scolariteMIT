import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationmoduleUpdateComponent } from './formationmodule-update.component';

describe('FormationmoduleUpdateComponent', () => {
  let component: FormationmoduleUpdateComponent;
  let fixture: ComponentFixture<FormationmoduleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationmoduleUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationmoduleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
