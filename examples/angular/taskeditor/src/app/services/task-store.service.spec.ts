import { TestBed } from '@angular/core/testing';

import { TaskStoreService } from './task-store.service';

describe('DocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskStoreService = TestBed.get(TaskStoreService);
    expect(service).toBeTruthy();
  });
});
