import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeetudiantformationComponent } from './listeetudiantformation.component';

describe('ListeetudiantformationComponent', () => {
  let component: ListeetudiantformationComponent;
  let fixture: ComponentFixture<ListeetudiantformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeetudiantformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeetudiantformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
