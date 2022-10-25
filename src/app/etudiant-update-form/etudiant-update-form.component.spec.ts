import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantUpdateFormComponent } from './etudiant-update-form.component';

describe('EtudiantUpdateFormComponent', () => {
  let component: EtudiantUpdateFormComponent;
  let fixture: ComponentFixture<EtudiantUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
