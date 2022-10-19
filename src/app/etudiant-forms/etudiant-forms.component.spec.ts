import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantFormsComponent } from './etudiant-forms.component';

describe('EtudiantFormsComponent', () => {
  let component: EtudiantFormsComponent;
  let fixture: ComponentFixture<EtudiantFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
