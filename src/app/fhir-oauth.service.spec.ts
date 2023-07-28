import { TestBed } from '@angular/core/testing';

import { FhirOauthService } from './fhir-oauth.service';

describe('FhirOauthService', () => {
  let service: FhirOauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FhirOauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
