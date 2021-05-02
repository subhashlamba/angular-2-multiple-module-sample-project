import { TestBed } from '@angular/core/testing';

import { UrlBaseCustomPreloadingService } from './url-base-custom-preloading.service';

describe('UrlBaseCustomPreloadingService', () => {
  let service: UrlBaseCustomPreloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlBaseCustomPreloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
