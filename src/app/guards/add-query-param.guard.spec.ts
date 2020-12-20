import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddQueryParamGuard } from './add-query-param.guard';

describe('AddQueryParamGuard', () => {
  let guard: AddQueryParamGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(AddQueryParamGuard);
  });

  test('is created', () => {
    expect(guard).toBeTruthy();
  });
});
