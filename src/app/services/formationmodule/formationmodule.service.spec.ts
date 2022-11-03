import { TestBed } from '@angular/core/testing';

import { FormationmoduleService } from './formationmodule.service';

describe('FormationmoduleService', () => {
  let service: FormationmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
