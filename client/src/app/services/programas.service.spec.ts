/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgramasService } from './programas.service';

describe('Service: Programas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramasService]
    });
  });

  it('should ...', inject([ProgramasService], (service: ProgramasService) => {
    expect(service).toBeTruthy();
  }));
});
