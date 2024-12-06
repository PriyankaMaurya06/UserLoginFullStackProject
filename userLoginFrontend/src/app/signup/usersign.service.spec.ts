import { TestBed } from '@angular/core/testing';

import { UsersignService } from './usersign.service';

describe('UsersignService', () => {
  let service: UsersignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
