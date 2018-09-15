import { TestBed } from '@angular/core/testing';

import { SearchSongService } from './search-song.service';

describe('SearchSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchSongService = TestBed.get(SearchSongService);
    expect(service).toBeTruthy();
  });
});
