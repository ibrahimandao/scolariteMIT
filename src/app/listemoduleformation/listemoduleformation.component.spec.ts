import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemoduleformationComponent } from './listemoduleformation.component';

describe('ListemoduleformationComponent', () => {
  let component: ListemoduleformationComponent;
  let fixture: ComponentFixture<ListemoduleformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemoduleformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListemoduleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
